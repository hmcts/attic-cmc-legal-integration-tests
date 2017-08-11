'use strict'

const user = require('../../../test-data').user

let loginPage, startClaimPage
module.exports = {

  _init () {
    loginPage = require('../pages/login')
    startClaimPage = require('../../claim/pages/claimant-start-claim')
  },

  loginDefaultUser () {
    loginPage.open()
    loginPage.login(user.email, user.password)
  },
    startClaim () {
        startClaimPage.open()
        startClaimPage.startClaim()
    },

}
