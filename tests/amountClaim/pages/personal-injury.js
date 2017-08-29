'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    personalInjuryYes: 'input[id=personal_injury_yes]',
    personalInjuryNo: 'input[id=personal_injury_no]',
    generalDamagesLess: 'input[id=generalDamages[value]LESS]',
    generalDamagesMore: 'input[id=generalDamages[value]MORE]'
  },
  buttons: {
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/personal-injury')
  },

  enterPersonalInjuryLessThan1000 () {
    I.see('Is it a personal injury claim?')
    I.checkOption(this.fields.personalInjuryYes)
    I.see('How much do you expect to recover as general damages for pain,')
    I.see('suffering and loss of amenity?')
    I.checkOption(this.fields.generalDamagesLess)
    I.click(this.buttons.saveandContinue)
  },

  enterPersonalInjuryMoreThan1000 () {
    I.see('Is it a personal injury claim?')
    I.checkOption(this.fields.personalInjuryYes)
    I.see('How much do you expect to recover as general damages for pain,')
    I.see('suffering and loss of amenity?')
    I.checkOption(this.fields.generalDamagesMore)
    I.click(this.buttons.saveandContinue)
  },

  noPersonalInjury () {
    I.see('Is it a personal injury claim?')
    I.checkOption(this.fields.personalInjuryNo)
    I.click(this.buttons.saveandContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Choose yes if it’s a personal injury claim')
  },

  checkMandatoryErrorMessageForAmount () {
    I.checkOption(this.fields.personalInjuryYes)
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Choose an amount')
  }

}
