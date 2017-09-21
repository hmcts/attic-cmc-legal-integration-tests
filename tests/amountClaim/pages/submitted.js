'use strict'
/* global actor */

const user = require('../../../test-data').user

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {

  },
  buttons: {
    saveAndContinue: 'input.button.button-start'
  },

  open () {
    I.amOnPage('/claim/submitted')
  },

  verifyTextInSubmittedPage () {
    I.see('Your claim has been issued')
    I.see('Fee paid: £455')
    I.see("We've emailed confirmation to: " + user.email)
    I.see('Follow these steps to serve a claim:')
    I.see('1. Download the sealed claim form (this will open in a new window).')
  }
}
