'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    organisationType: 'input[id=organisationType]',
    organisationName: 'input[id=organisation]',
    companyHouseNumber: 'input[id=companyHouseNumber]',
    individualType: 'input[id=individualType]',
    individualTitle: 'input[id=title]',
    individualFullName: 'input[id=fullName]'
  },

  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/defendant-type')
  },

  enterDefendantTypeIndividual () {
    I.checkOption(this.fields.individualType)
    I.fillField(this.fields.individualTitle, 'Mr')
    I.fillField(this.fields.individualFullName, 'Pret')
    I.click(this.buttons.saveAndContinue)
  },

  enterDefendantTypeOrganisation () {
    I.checkOption(this.fields.organisationType)
    I.fillField(this.fields.organisationName, 'Def corporation')
    I.fillField(this.fields.companyHouseNumber, '678910')
    I.click(this.buttons.saveAndContinue)
  },

  enterAnotherDefendantTypeIndividual () {
    I.checkOption(this.fields.individualType)
    I.fillField(this.fields.individualTitle, 'Mrs')
    I.fillField(this.fields.individualFullName, 'Orange')
    I.click(this.buttons.saveAndContinue)
  },

  enterAnotherDefendantTypeOrganisation () {
    I.checkOption(this.fields.organisationType)
    I.fillField(this.fields.organisationName, 'Ghi corporation')
    I.fillField(this.fields.companyHouseNumber, '111213')
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessageForChooseDefendant () {
    I.click(this.buttons.saveAndContinue)
    I.see('Choose a type of defendant')
  },

  checkMandatoryErrorMessageForOrganisationName () {
    I.checkOption(this.fields.organisationType)
    I.click(this.buttons.saveAndContinue)
    I.see('Enter an organisation name')
  },

  checkForBlankErrorMessageForOrganisationName () {
    I.checkOption(this.fields.organisationType)
    I.fillField(this.fields.organisationName, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter an organisation name')
  },

  checkMandatoryErrorMessageForIndividualName () {
    I.checkOption(this.fields.individualType)
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a full name')
  },

  checkForBlankErrorMessageForIndividualName () {
    I.checkOption(this.fields.individualType)
    I.fillField(this.fields.individualFullName, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a full name')
  }

}
