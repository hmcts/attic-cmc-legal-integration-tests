'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    addressLine1: 'input[id=line1]',
    addressLine2: 'input[id=line2]',
    cityName: 'input[id=city]',
    postcode: 'input[id=postcode]'
  },
  buttons: {
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/statement-of-truth')
  }
}
