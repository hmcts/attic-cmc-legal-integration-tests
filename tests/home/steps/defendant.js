'use strict'

let defendantTypePage, defendantAddressPage

module.exports = {
  _init () {
    defendantTypePage = require('../../defence/pages/defendant-type')
    defendantAddressPage = require('../../defence/pages/defendant-address')
  },

  enterDefendantTypeIndividual () {
    defendantTypePage.enterDefendantTypeIndividual()
  },
  enterDefendantTypeOrganisation () {
    defendantTypePage.enterDefendantTypeOrganisation()
  },

  enterDefendantAddress () {
    defendantAddressPage.enterYourOrganisationAddress()
  }

}
