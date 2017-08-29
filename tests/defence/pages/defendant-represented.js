'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    defendantRepresentedYes: 'input[id=defendant_represented_yes]',
    defendantRepresentedNo: 'input[id=defendant_represented_no]',
    companyName: 'input[id=organisationName]'
  },

  buttons: {
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/defendant-represented')
  },

  enterDefendantCompanyName () {
    I.see('Has the defendant got a legal representative')
    I.see("who's instructed to accept service?")
    I.checkOption(this.fields.defendantRepresentedYes)
    I.see('Defendant representative organisation name')
    I.fillField(this.fields.companyName, 'Defendant Rep Ltd')
    I.click(this.buttons.saveandContinue)
  },

  noDefendantCompanyName () {
    I.see('Has the defendant got a legal representative')
    I.see("who's instructed to accept service?")
    I.checkOption(this.fields.defendantRepresentedNo)
    I.click(this.buttons.saveandContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Choose yes if defendant is represented')
  },

  checkMandatoryErrorMessageForDefendantCompanyName () {
    I.checkOption(this.fields.defendantRepresentedYes)
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter defendant representative organisation name')
  },

  checkForBlankErrorMessageForDefendantCompanyName () {
    I.checkOption(this.fields.defendantRepresentedYes)
    I.fillField(this.fields.companyName, ' ')
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter defendant representative organisation name')
  }
}
