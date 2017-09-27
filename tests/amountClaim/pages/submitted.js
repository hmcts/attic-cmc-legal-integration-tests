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
    finish: 'input.button.button-start'
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
    I.scrollPageToBottom()
    I.click('Download the sealed claim form')
    I.waitForText('2. Send the form, particulars of claim and a response pack to the defendant within 4 months of the date of issue.')
    I.waitForText('3. Send the court a certificate of service and a copy of any documents you served on the defendant, within 21 days of service.')
    I.see('Court address:')
    I.see('County Court Money Claims Centre (CCMCC)')
    I.see('Salford')
    I.see('Greater Manchester')
    I.see('M5 0BY')
    I.see('DX: 702634 Salford 5')
    I.click(this.buttons.finish)
  }
}
