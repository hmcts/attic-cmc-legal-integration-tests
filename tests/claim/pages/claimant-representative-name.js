'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    companyName: 'input[id=name]'
  },
  buttons: {
    startNow: 'input.button'
  },

  open () {
    I.amOnPage('/claim/representative-name')
  },

  enterYourDetails () {
    I.see('Enter your details')
    I.see('Your company name')
    I.fillField(this.fields.companyName, 'Abc Company')
    I.click(this.buttons.startNow)
  }
}
