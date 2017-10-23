'use strict'
/* global actor */

const user = require('../../../test-data').user
const verifyPageData = require('../../../test-data').verifyPageData
let assert = require('assert')

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
    I.amOnPage('/legal/claim/submitted')
  },

  verifyTextInSubmittedPage (dateCheck) {
    I.see(verifyPageData.feesPaid)
    I.see(verifyPageData.emailConfirmation + user.email)
    if (dateCheck[0].length >= 22 && dateCheck[1].length >= 19) {
      assert.equal('true', 'true')
    } else {
      assert.equal('true', 'false')
    }
  },

  selectSubmitButton () {
    I.click(this.buttons.finish)
    I.see('start')
  }
}
