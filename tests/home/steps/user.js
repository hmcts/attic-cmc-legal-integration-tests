'use strict'

const user = require('../../../test-data').user

let loginPage, startClaimPage, enterYourOrganisationNamePage, yourOrganisationAddressPage, yourContactDetailsPage,
  yourReferencePage, yourCountyCourtPage, claimantTypePage, claimantAddressPage, claimantAddPage

module.exports = {

  _init () {
    loginPage = require('../pages/login')
    startClaimPage = require('../../claim/pages/claimant-start-claim')
    enterYourOrganisationNamePage = require('../../claim/pages/claimant-representative-name')
    yourOrganisationAddressPage = require('../../claim/pages/claimant-representative-address')
    yourContactDetailsPage = require('../../claim/pages/claimant-representative-contacts')
    yourReferencePage = require('../../claim/pages/claimant-reference')
    yourCountyCourtPage = require('../../claim/pages/claimant-preferred-court')
    claimantTypePage = require('../../claim/pages/claimant-type')
    claimantAddressPage = require('../../claim/pages/claimant-address')
    claimantAddPage = require('../../claim/pages/claimant-add')
  },
  loginDefaultUser () {
    loginPage.open()
    loginPage.login(user.email, user.password)
  },
  startClaim () {
    startClaimPage.open()
    startClaimPage.startClaim()
  },
  enterYourOrganisationNamePage () {
    enterYourOrganisationNamePage.enterYourOrganisationNamePage()
  },
  enterYourOrganisationAddress () {
    yourOrganisationAddressPage.enterYourOrganisationAddress()
  },
  enterYourOrganisationContactDetails () {
    yourContactDetailsPage.enterYourOrganisationContactDetails()
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
    claimantAddressPage.enterYourOrganisationAddress()
  },
  addAdditionalClaimant () {
    claimantAddPage.enterAdditionalClaimant()
  },
  noAdditionalClaimant () {
    claimantAddPage.noAdditionalClaimant()
  }
}
