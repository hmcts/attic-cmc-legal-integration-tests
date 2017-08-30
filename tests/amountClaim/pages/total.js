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
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/total')
  },

  checkFeeTotalForRange () {
    I.see('Your issue fee')
    I.see('Amount claimed')
    I.see('To be assessed')
    I.see('Legal representative’s costs')
    I.see('To be assessed')
    I.see('Issue fee (based on £6,000 higher value)')
    I.see('£455')
    I.click(this.buttons.saveandContinue)
  },

  checkFeeTotalForCanNotStateValue () {
    I.see('Your issue fee')
    I.see('Amount claimed')
    I.see('To be assessed')
    I.see('Legal representative’s costs')
    I.see('To be assessed')
    I.see('Issue fee (no higher value given)')
    I.see('£10,000')
    I.click(this.buttons.saveandContinue)
  }

}
