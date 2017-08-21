'use strict'
const fs = require('fs')

const request = require('request-promise-native')
const claimant = require('./test-data').user

const idamBaseURL = process.env.IDAM_URL
const siteBaseURL = process.env.URL

class Client {

  static create (email, password) {
    return request.post({
      uri: `${idamBaseURL}/testing-support/accounts`,
      body: {
        email: email,
        forename: 'john',
        surname: 'smith',
        levelOfAccess: 0,
        userGroup: {
          code: 'cmc-solicitor'
        },
        activationDate: '',
        lastAccess: '',
        password: password
      },
      json: true
    })
  }

  static checkHealth () {
    return request.get({
      uri: `${siteBaseURL}/health`,
      resolveWithFullResponse: true,
      rejectUnauthorized: false,
      ca: fs.readFileSync('localhost.crt'),
      json: true
    })
  }
}

function logStartupProblem (response) {
  if (response.body) {
    console.log(response.body)
  } else if (response.message) {
    console.log(response.message)
  }
}

module.exports = async function (done) {
  async function prepareClaimant () {
    const createResult = await Client.create(claimant.email, claimant.password)
    console.log('Bootstrap: Prepared claimant user')

    return createResult
  }

  async function waitTillHealthy () {
    const maxTries = 15
    const sleepInterval = 10

    let response
    for (let i = 0; i < maxTries; i++) {
      response = await Client.checkHealth()
                    .catch((error) => {
                      return error
                    })

      console.log('Status code: ', response.statusCode)

      if (response.statusCode === 200) {
        return Promise.resolve()
      } else {
        logStartupProblem(response)
        // horrible hacky javascript sleep http://stackoverflow.com/a/37575602
        const waitTill = new Date(new Date().getTime() + sleepInterval * 1000)
        console.log('Sleeping for: ', sleepInterval)
        while (waitTill > new Date()) {}
      }
    }

    const error = new Error(`Failed after ${maxTries} attempts`)
    error.response = response

    return Promise.reject(error)
  }

  await waitTillHealthy()
    .then(prepareClaimant)
    .catch((error) => {
      const errorBody = () => {
        return error && error.response ? error.response.body : error
      }

      console.log('Error during bootstrap, exiting', errorBody())
      process.exit(1)
    })
  done()
}
