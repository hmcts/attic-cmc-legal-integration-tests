'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    lowerValue: 'input[id=lowerValue]',
    higherValue: 'input[id=higherValue]',
    cannotState: 'input[id=cannotState]'
  },
  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnPage('/legal/claim/amount')
  },

  enterHigherValueOfTheClaim () {
    I.fillField(this.fields.higherValue, '1000')
    I.click(this.buttons.saveAndContinue)
  },

  enterRangeOfTheClaim () {
    I.fillField(this.fields.lowerValue, '3000')
    I.fillField(this.fields.higherValue, '6000')
    I.click(this.buttons.saveAndContinue)
  },

  canNotStateTheClaim () {
    I.checkOption(this.fields.cannotState)
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a higher value or choose ‘I can’t or don’t want to state the value’')
  },

  checkForBlankErrorMessage () {
    I.fillField(this.fields.higherValue, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter valid higher value')
  },

  checkErrorMessageForLowerValueOnly () {
    I.fillField(this.fields.lowerValue, '3000')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter valid higher value')
  },

  checkErrorMessageForSelectingBothHigherAndCanNotCheckbox () {
    I.fillField(this.fields.higherValue, '3000')
    I.checkOption(this.fields.cannotState)
    I.click(this.buttons.saveAndContinue)
    I.see('Choose ‘I can’t state the value’ or enter a higher value')
    I.see('Enter a higher value or choose ‘I can’t or don’t want to state the value’')
  }

}
