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
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/representative-name')
  },

  enterYourOrganisationNamePage () {
    I.see('Your organisation name')
    I.fillField(this.fields.organisationName, 'Abc Organisation')
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveAndContinue)
    I.see('There was a problem')
    I.see('Enter your organisation name')
  },

  checkForBlankErrorMessage () {
    I.fillField(this.fields.organisationName, '')
    I.click(this.buttons.saveAndContinue)
    I.see('There was a problem')
    I.see('Enter your organisation name')
  }

}
