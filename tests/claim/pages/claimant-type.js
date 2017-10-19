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
    I.amOnPage('/claim/claimant-type')
  },

  enterClaimantTypeIndividual () {
    I.checkOption(this.fields.individualType)
    I.fillField(this.fields.individualTitle, 'Mr')
    I.fillField(this.fields.individualFullName, 'Benugo')
    I.click(this.buttons.saveAndContinue)
  },

  enterClaimantTypeOrganisation () {
    I.checkOption(this.fields.organisationType)
    I.fillField(this.fields.organisationName, 'Abc corporation')
    I.fillField(this.fields.companyHouseNumber, '12345')
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessageForChooseClaimant () {
    I.click(this.buttons.saveAndContinue)
    I.see('Choose a type of claimant')
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
