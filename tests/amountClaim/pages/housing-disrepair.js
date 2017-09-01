'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    housingDisrepairYes: 'input[id=housing_disrepair_yes]',
    housingDisrepairNo: 'input[id=housing_disrepair_no]',
    generalDamagesLess: 'input[id="generalDamages[value]LESS"]',
    generalDamagesMore: 'input[id="generalDamages[value]MORE"]',
    otherDamagesNone: 'input[id="otherDamages[value]NONE"]',
    otherDamagesLess: 'input[id="otherDamages[value]LESS"]',
    otherDamagesMore: 'input[id="otherDamages[value]MORE"]'
  },
  buttons: {
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/housing-disrepair')
  },

  enterHousingDisrepairGeneralDamagesLessThan1000 () {
    I.see('Is it a claim for housing disrepair seeking an order for a landlord to carry out work?')
    I.checkOption(this.fields.housingDisrepairYes)
    I.see('How much do you expect to recover as general damages for the cost of repairs or other work?')
    I.checkOption(this.fields.generalDamagesLess)
    I.click(this.buttons.saveandContinue)
  },

  enterHousingDisrepairGeneralDamagesMoreThan1000 () {
    I.see('Is it a claim for housing disrepair seeking an order for a landlord to carry out work?')
    I.checkOption(this.fields.housingDisrepairYes)
    I.see('How much do you expect to recover as general damages for the cost of repairs or other work?')
    I.checkOption(this.fields.generalDamagesMore)
    I.click(this.buttons.saveandContinue)
  },

  enterHousingDisrepairOtherDamagesLessThan1000 () {
    I.checkOption(this.fields.housingDisrepairYes)
    I.see('How much do you expect to recover for other damages besides the cost of repairs')
    I.checkOption(this.fields.otherDamagesLess)
    I.click(this.buttons.saveandContinue)
  },

  enterHousingDisrepairOtherDamagesMoreThan1000 () {
    I.checkOption(this.fields.housingDisrepairYes)
    I.checkOption(this.fields.otherDamagesMore)
    I.click(this.buttons.saveandContinue)
  },

  enterHousingDisrepairNoOtherDamages () {
    I.checkOption(this.fields.housingDisrepairYes)
    I.checkOption(this.fields.otherDamagesNone)
    I.click(this.buttons.saveandContinue)
  },

  noHousingDisrepair () {
    I.checkOption(this.fields.housingDisrepairNo)
    I.click(this.buttons.saveandContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Choose yes if the claim is for housing disrepair')
  },

  checkMandatoryErrorMessageForAmounts () {
    I.checkOption(this.fields.housingDisrepairYes)
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Choose an amount for general damages')
    I.see('Choose an amount for other damages')
  }
}
