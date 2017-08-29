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
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/pay-by-account')
  }
}
