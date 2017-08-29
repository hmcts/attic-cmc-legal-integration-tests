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
    saveandContinue: 'input.button.button-start'
  },

  open () {
    I.amOnPage('/claim/submitted')
  }
}
