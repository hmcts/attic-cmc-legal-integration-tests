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
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/amount')
  },

  enterHigherValueOfTheClaim () {
    I.see('Enter claim value')
    I.fillField(this.fields.higherValue, '1000')
    I.click(this.buttons.saveandContinue)
  },

  enterRangeOfTheClaim () {
    I.see('Enter claim value')
    I.fillField(this.fields.lowerValue, '3000')
    I.fillField(this.fields.higherValue, '6000')
    I.click(this.buttons.saveandContinue)
  },

  canNotStateTheClaim () {
    I.see('Enter claim value')
    I.checkOption(this.fields.cannotState)
    I.see("You'll be charged the maximum fee")
    I.click(this.buttons.saveandContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter valid higher value')
  },

  checkForBlankErrorMessage () {
    I.fillField(this.fields.higherValue, ' ')
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter valid higher value')
  },

  checkErrorMessageForLowerValueOnly () {
    I.fillField(this.fields.lowerValue, '3000')
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter valid higher value')
  },

  checkErrorMessageForSelectingBothHigherAndCanNotCheckbox () {
    I.fillField(this.fields.higherValue, '3000')
    I.checkOption(this.fields.cannotState)
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter a value or choose ‘I can’t state the value’')
  }

}
