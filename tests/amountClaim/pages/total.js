'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {

  },
  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnPage('/legal/claim/total')
  },

  checkFeeTotalForRange () {
    I.see('Your issue fee')
    I.see('Amount claimed')
    I.see('To be assessed')
    I.see('Legal representative’s costs')
    I.see('To be assessed')
    I.see('Issue fee (based on £6,000 higher value)')
    I.see('£455')
    I.click(this.buttons.saveAndContinue)
  },

  checkFeeTotalForCanNotStateValue () {
    I.see('Your issue fee')
    I.see('Amount claimed')
    I.see('To be assessed')
    I.see('Legal representative’s costs')
    I.see('To be assessed')
    I.see('Issue fee (no higher value given)')
    I.see('£10,000')
    I.click(this.buttons.saveAndContinue)
  }

}
