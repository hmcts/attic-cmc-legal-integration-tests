'use strict'
/* global actor */

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
    I.amOnPage('/claim/pay-by-account')
  },

  enterFeeAccountNumber () {
    I.see('Pay by Fee Account')
    I.see('Total cost')
    I.see('£455')
    I.see('Fee Account number')
    I.fillField(this.fields.feeAccountReference, 'PBA1234567')
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveAndContinue)
    I.see('There was a problem')
    I.see('Enter your Fee Account number')
  },

  checkForBlankErrorMessage () {
    I.fillField(this.fields.feeAccountReference, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('There was a problem')
    I.see('Enter your Fee Account number')
  },

  checkForInvalidReference () {
    I.fillField(this.fields.feeAccountReference, 'PBA12345675 ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid Fee Account number')
  }
}
