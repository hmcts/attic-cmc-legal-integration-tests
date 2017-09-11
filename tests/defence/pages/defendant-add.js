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
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/defendant-add')
  },

  enterAnotherDefendant () {
    I.see('Do you want to add another defendant?')
    I.see('You can add up to 20 defendants in this service.')
    I.checkOption(this.fields.defendantAddYes)
    I.click(this.buttons.saveandContinue)
  },

  noAnotherDefendant () {
    I.see('Do you want to add another defendant?')
    I.see('You can add up to 20 defendants in this service.')
    I.checkOption(this.fields.defendantAddNo)
    I.click(this.buttons.saveandContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Choose yes if need to add another defendant')
  }
}
