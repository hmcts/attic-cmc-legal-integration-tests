'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    organisationName: 'input[id=name]'
  },

  buttons: {
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/representative-name')
  },

  enterYourDetails () {
    I.see('Enter your details')
    I.see('Your organisation name')
    I.fillField(this.fields.organisationName, 'Abc Organisation')
    I.click(this.buttons.saveandContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter your organisation name')
  },

  checkForBlankErrorMessage () {
    I.fillField(this.fields.organisationName, '')
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter your organisation name')
  }

}
