'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    defendantAddYes: 'input[id=defendant_add_yes]',
    defendantAddNo: 'input[id=defendant_add_no]'
  },

  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/defendant-add')
  },

  enterAnotherDefendant () {
    I.see('Do you want to add another defendant?')
    I.see('You can add up to 20 defendants in this service.')
    I.checkOption(this.fields.defendantAddYes)
    I.click(this.buttons.saveAndContinue)
  },

  noAnotherDefendant () {
    I.see('Do you want to add another defendant?')
    I.see('You can add up to 20 defendants in this service.')
    I.checkOption(this.fields.defendantAddNo)
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveAndContinue)
    I.see('There was a problem')
    I.see('Choose yes if need to add another defendant')
  }
}
