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
   // I.click(submitPageData.downloadPDFLink)
    I.see(submitPageData.claimIssuedText)
    I.see(submitPageData.feesPaid)
    I.see(submitPageData.emailConfirmation + user.email)
    I.see(submitPageData.followSteps)
    I.see(submitPageData.followStepsPoint1)
    I.scrollPageToBottom()
    I.waitForText(submitPageData.followStepsPoint2)
    I.waitForText(submitPageData.followStepsPoint3)
    I.see('Court address:')
    I.see(submitPageData.courtAddress.line1)
    I.see(submitPageData.courtAddress.line2)
    I.see(submitPageData.courtAddress.city)
    I.see(submitPageData.courtAddress.postcode)
    I.see(submitPageData.courtAddress.dxNumber)
  },

  downloadPDF (url) {
    I.amOnPage(url)
    I.seeInCurrentUrl("/receipts")
    I.wait(10)
  },

  selectSubmitButton () {
    I.scrollPageToBottom()
    I.click(this.buttons.finish)
    I.see('start')
  }
}
