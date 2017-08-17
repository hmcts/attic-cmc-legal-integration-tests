'use strict'

const user = require('../../../test-data').user

let loginPage, startClaimPage, yourDetailsPage, yourCompanyAddressPage, yourContactDetailsPage, yourReferencePage, yourCountyCourtPage, claimantTypePage, claimantAddressPage

module.exports = {

  _init () {
    loginPage = require('../pages/login')
    startClaimPage = require('../../claim/pages/claimant-start-claim')
    yourDetailsPage = require('../../claim/pages/claimant-representative-name')
    yourCompanyAddressPage = require('../../claim/pages/claimant-representative-address')
    yourContactDetailsPage = require('../../claim/pages/claimant-representative-contacts')
    yourReferencePage = require('../../claim/pages/claimant-reference')
    yourCountyCourtPage = require('../../claim/pages/claimant-preferred-court')
    claimantTypePage = require('../../claim/pages/claimant-type')
    claimantAddressPage = require('../../claim/pages/claimant-address')
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
    yourDetailsPage.enterYourDetails()
  },
  enterYourCompanyAddress () {
    yourCompanyAddressPage.enterYourCompanyAddress()
  },
  enterYourCompanyContactDetails () {
    yourContactDetailsPage.enterYourCompanyContactDetails()
  },
  enterYourReferenceNumber () {
    yourReferencePage.enterYourReferenceForClaim()
  },
  enterYourPreferredCountyCourt () {
    yourCountyCourtPage.enterYourPreferredCountyCourt()
  },
  enterClaimantTypeIndividual () {
    claimantTypePage.enterClaimantTypeIndividual()
  },
  enterClaimantTypeOrganisation () {
    claimantTypePage.enterClaimantTypeOrganisation()
  },
  enterClaimantAddress () {
    claimantAddressPage.enterYourCompanyAddress()
  }
}
