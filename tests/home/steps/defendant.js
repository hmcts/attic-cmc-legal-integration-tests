'use strict'

let defendantTypePage, defendantAddressPage, defendantRepresentativePage, defendantRepresentativeAddressPage, defendantAddAnotherDefendantPage

module.exports = {
  _init () {
    defendantTypePage = require('../../defence/pages/defendant-type')
    defendantAddressPage = require('../../defence/pages/defendant-address')
    defendantRepresentativePage = require('../../defence/pages/defendant-represented')
    defendantRepresentativeAddressPage = require('../../defence/pages/defendant-reps-address')
    defendantAddAnotherDefendantPage = require('../../defence/pages/defendant-add')
  },

  enterDefendantTypeIndividual () {
    defendantTypePage.enterDefendantTypeIndividual()
  },
  enterDefendantTypeOrganisation () {
    defendantTypePage.enterDefendantTypeOrganisation()
  },

  enterDefendantAddress () {
    defendantAddressPage.enterYourOrganisationAddress()
  },

  enterDefendantRepsCompanyName () {
    defendantRepresentativePage.enterDefendantCompanyName()
  },

  noDefendantCompanyName () {
    defendantRepresentativePage.noDefendantCompanyName()
  },

  enterDefendantRepsAddress () {
    defendantRepresentativeAddressPage.enterDefendantRepsCompanyAddress()
  },

  enterAnotherDefendant () {
    defendantAddAnotherDefendantPage.enterAnotherDefendant()
  },

  noAnotherDefendant () {
    defendantAddAnotherDefendantPage.noAnotherDefendant()
  }

}
