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
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/claimant-type')
  },

  enterClaimantTypeIndividual () {
    I.see('Choose claimant type')
    I.checkOption(this.fields.individualType)
    I.see('Title (optional)')
    I.fillField(this.fields.individualTitle, 'Mr')
    I.see('Full name')
    I.fillField(this.fields.individualFullName, 'Benugo')
    I.click(this.buttons.saveandContinue)
  },

  enterClaimantTypeOrganisation () {
    I.see('Choose claimant type')
    I.checkOption(this.fields.organisationType)
    I.see('Organisation name')
    I.fillField(this.fields.organisationName, 'Abc corporation')
    I.see('Companies House number (optional)')
    I.fillField(this.fields.companyHouseNumber, '12345')
    I.click(this.buttons.saveandContinue)
  },

  checkMandatoryErrorMessageForChooseClaimant () {
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Choose a type of claimant')
  },

  checkMandatoryErrorMessageForOrganisationName () {
    I.checkOption(this.fields.organisationType)
    I.see('Organisation name')
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter an organisation name')
  },

  checkForBlankErrorMessageForOrganisationName () {
    I.checkOption(this.fields.organisationType)
    I.see('Organisation name')
    I.fillField(this.fields.organisationName, ' ')
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter an organisation name')
  },

  checkMandatoryErrorMessageForIndividualName () {
    I.checkOption(this.fields.individualType)
    I.see('Full name')
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter a full name')
  },
  checkForBlankErrorMessageForIndividualName () {
    I.checkOption(this.fields.individualType)
    I.see('Full name')
    I.fillField(this.fields.individualFullName, ' ')
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter a full name')
  }

}
