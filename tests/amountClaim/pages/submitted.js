'use strict'
/* global actor */

const user = require('../../../test-data').user
const submitPageData = require('../../../test-data').submitPageData

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
    I.see(submitPageData.feesPaid)
    I.see(submitPageData.emailConfirmation + user.email)
  },

  selectSubmitButton () {
    I.click(this.buttons.finish)
    I.see('start')
  }
}
