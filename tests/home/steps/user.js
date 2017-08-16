'use strict'

const user = require('../../../test-data').user

let loginPage, startClaimPage, yourDetailsPage, yourCompanyAddressPage

module.exports = {

  _init () {
    loginPage = require('../pages/login')
    startClaimPage = require('../../claim/pages/claimant-start-claim')
    yourDetailsPage = require('../../claim/pages/claimant-representative-name')
    yourCompanyAddressPage = require('../../claim/pages/claimant-representative-address')
  },
  loginDefaultUser () {
    loginPage.open()
    loginPage.login(user.email, user.password)
  },
  startClaim () {
    startClaimPage.open()
    startClaimPage.startClaim()
  },
  enterYourDetails () {
    yourDetailsPage.open()
    yourDetailsPage.enterYourDetails()
  },
  enterYourCompanyAddress () {
    yourCompanyAddressPage.open()
    yourCompanyAddressPage.enterYourCompanyAddress()
  }

}
