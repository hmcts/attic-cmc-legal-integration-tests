'use strict'
/* global actor */

const user = require('../../../test-data').user
const verifyPageData = require('../../../test-data').verifyPageData
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
let I, expect
expect = chai.expect

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

  verifyTextInSubmittedPage (dateCheck) {
    I.see(verifyPageData.feesPaid)
    I.see(verifyPageData.emailConfirmation + user.email)
    expect(dateCheck[0].length).to.be.greaterThan(22)
    expect(dateCheck[1].length).to.be.greaterThan(19)
  },

  selectSubmitButton () {
    I.click(this.buttons.finish)
    I.see('start')
  }
}
