'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    referenceNumber: 'input[id=reference]'
  },

  buttons: {
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/your-reference')
  },

  enterYourReferenceForClaim () {
    I.see('Your reference for this claim')
    I.fillField(this.fields.referenceNumber, 'PBA1234567')
    I.click(this.buttons.saveandContinue)
  }

}
