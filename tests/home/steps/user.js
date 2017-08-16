'use strict'

const user = require('../../../test-data').user

let loginPage, startClaimPage, yourDetailsPage, yourCompanyAddressPage, yourContactDetailsPage, yourReferencePage,yourCountyCourtPage

module.exports = {

  _init () {
    loginPage = require('../pages/login')
    startClaimPage = require('../../claim/pages/claimant-start-claim')
    yourDetailsPage = require('../../claim/pages/claimant-representative-name')
    yourCompanyAddressPage = require('../../claim/pages/claimant-representative-address')
    yourContactDetailsPage = require('../../claim/pages/claimant-representative-contacts')
    yourReferencePage = require('../../claim/pages/claimant-reference')
    yourCountyCourtPage = require('../../claim/pages/claimant-preferred-court')
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
  },
  enterYourCompanyContactDetails () {
    yourContactDetailsPage.open()
    yourContactDetailsPage.enterYourCompanyContactDetails()
  },
  enterYourReferenceNumber () {
    yourReferencePage.open()
    yourReferencePage.enterYourReferenceForClaim()
  },
  enterYourPreferredCountyCourt () {
    yourCountyCourtPage.open()
    yourCountyCourtPage.enterYourPreferredCountyCourt()
  }
}
