'use strict'
/* global actor */
const verifyPageData = require('../../../test-data').verifyPageData

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    feeAccountReference: 'input[id=reference]'
  },
  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnPage('/legal/claim/pay-by-account')
  },

  enterFeeAccountNumber () {
    I.see(verifyPageData.feesPaid)
    I.fillField(this.fields.feeAccountReference, verifyPageData.feeAccountNumber)
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveAndContinue)
    I.see('Enter your Fee Account number')
  },

  checkForBlankErrorMessage () {
    I.fillField(this.fields.feeAccountReference, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter your Fee Account number')
  },

  checkForInvalidReference () {
    I.fillField(this.fields.feeAccountReference, 'PBA12345675 ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid Fee Account number')
  }
}
