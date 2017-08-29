'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    signerName: 'input[id=signerName]',
    signerRole: 'input[id=signerRole]'
  },
  buttons: {
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/statement-of-truth')
  }
}
