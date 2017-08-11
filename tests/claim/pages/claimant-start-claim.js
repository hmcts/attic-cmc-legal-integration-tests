'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  buttons: {
    startNow: 'input.button.button-start'
  },

  open () {
    I.amOnPage('/claim/start')
  },

  startClaim () {
    I.see('Before you start')
    I.click(this.buttons.startNow)
  }
}
