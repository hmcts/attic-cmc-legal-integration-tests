'use strict'
/* global actor */

const user = require('../../../test-data').user
const verifyPageData = require('../../../test-data').verifyPageData
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiAsPromised)
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

  verifyTextInSubmittedPage (dateCheck) {
    I.see(verifyPageData.feesPaid)
    I.see(verifyPageData.emailConfirmation + user.email)
    // verify submit date text present or not
    expect(dateCheck[0].length).to.be.greaterThan(22)
    // verify issue date text present or not
    expect(dateCheck[1].length).to.be.greaterThan(19)
  },

  selectSubmitButton () {
    I.click(this.buttons.finish)
    I.see('start')
  }
}
