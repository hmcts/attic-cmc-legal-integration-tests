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
    I.amOnPage('/legal/claim/defendant-add')
  },

  enterAnotherDefendant () {
    I.checkOption(this.fields.defendantAddYes)
    I.click(this.buttons.saveAndContinue)
  },

  noAnotherDefendant () {
    I.checkOption(this.fields.defendantAddNo)
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveAndContinue)
    I.see('Choose yes if need to add another defendant')
  }
}
