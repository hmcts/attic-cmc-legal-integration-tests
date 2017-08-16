'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },

  fields: {
    courtName: 'input[id=name]'
  },

  buttons: {
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/preferred-court')
  },

  enterYourPreferredCountyCourt () {
    I.see('Choose a county court')
    I.fillField(this.fields.courtName, 'Dartford County Court')
    I.click(this.buttons.saveandContinue)
  }

}
