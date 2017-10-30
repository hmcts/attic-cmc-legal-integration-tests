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

  data: {
    organisationNameText: 'Abc Organisation'
  },

  open () {
    I.amOnPage('/legal/claim/representative-name')
  },

  enterYourOrganisationName () {
    I.fillField(this.fields.organisationName, this.data.organisationNameText)
    I.click(this.buttons.saveAndContinue)
  },

  verifyOrganizationName () {
    I.seeInField(this.fields.organisationName, this.data.organisationNameText)
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveAndContinue)
    I.see('Enter your organisation name')
  },

  checkForBlankErrorMessage () {
    I.fillField(this.fields.organisationName, '')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter your organisation name')
  }

}
