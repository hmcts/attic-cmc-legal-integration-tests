'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    summariseClaimTextArea: 'textarea[id=text]'
  },
  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/summarise-the-claim')
  },

  enterBriefDescriptionOfTheClaim () {
    I.see('Briefly describe the claim')
    I.fillField(this.fields.summariseClaimTextArea, 'I would like to test this with codeceptjs')
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveAndContinue)
    I.see('There was a problem')
    I.see('Enter a brief description of the claim')
  },

  checkForBlankErrorMessage () {
    I.fillField(this.fields.summariseClaimTextArea, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('There was a problem')
    I.see('Enter a brief description of the claim')
  }
}
