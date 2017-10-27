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
    individualFullName: 'input[id=fullName]',
    changeFirstClaimant: '//*[@href="/legal/claim/claimant-change?index=1"]',
    removeSecondClaimant: '//*[@href="/legal/claim/claimant-remove?index=2"]'
  },

  buttons: {
    saveAndContinue: 'input.button'
  },

  data: {
    individualTitleText: 'Mr',
    updatedTitleText: 'Mrs',
    individualFullNameText: 'Benugo',
    updatedNameText: 'Gourmet',
    removeButtonText: 'Remove',
    changeButtonText: 'Change'
  },

  open () {
    I.amOnPage('/legal/claim/claimant-type')
  },

  enterClaimantTypeIndividual () {
    I.checkOption(this.fields.individualType)
    I.fillField(this.fields.individualTitle, this.data.individualTitleText)
    I.fillField(this.fields.individualFullName, this.data.individualFullNameText)
    I.click(this.buttons.saveAndContinue)
  },
  verifyClaimantIndividualDetails () {
    I.see('Claimant')
    I.see(this.data.individualTitleText + ' ' + this.data.individualFullNameText)
    I.see(this.data.removeButtonText)
    I.see(this.data.changeButtonText)
  },
  changeRemoveIndividualClaimantDetails () {
    I.click(this.data.removeButtonText, this.fields.removeSecondClaimant)
    I.click(this.data.changeButtonText, this.fields.changeFirstClaimant)
    I.checkOption(this.fields.organisationType)
    I.fillField(this.fields.organisationName, this.data.updatedNameText)
    I.click(this.buttons.saveAndContinue)
    I.click(this.buttons.saveAndContinue)
    I.see(this.data.updatedNameText)
    I.wait(10)
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
