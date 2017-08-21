'use strict'

let defendantTypePage

module.exports = {
  _init () {
    defendantTypePage = require('../../defence/pages/defendant-type')
  },

  enterDefendantTypeIndividual () {
    defendantTypePage.enterDefendantTypeIndividual()
  },
  enterDefendantTypeOrganisation () {
    defendantTypePage.enterDefendantTypeOrganisation()
  }
}
