'use strict'
/* global actor */
const verifyPageData = require('../../../test-data').verifyPageData

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    referenceNumber: 'input[id=reference]'
  },

  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnPage('/legal/claim/your-reference')
  },

  enterYourReferenceForClaim () {
    I.see('Your reference for this claim')
    I.fillField(this.fields.referenceNumber, verifyPageData.organizationRefNumber)
    I.click(this.buttons.saveAndContinue)
  }

}
