'use strict'
/* global actor */

const user = require('../../../test-data').user
const verifyPageData = require('../../../test-data').verifyPageData

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {

  },
  buttons: {
    finish: 'input.button.button-start'
  },

  open () {
    I.amOnPage('/claim/submitted')
  },

  verifyTextInSubmittedPage () {
    I.see(verifyPageData.feesPaid)
    I.see(verifyPageData.emailConfirmation + user.email)
  },

  selectSubmitButton () {
    I.click(this.buttons.finish)
    I.see('start')
  }
}
