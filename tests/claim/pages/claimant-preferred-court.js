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
    I.see('Choose court location')
    I.fillField(this.fields.courtName, 'Dartford County Court')
    I.see('Find a hearing centre')
    I.click(this.buttons.saveandContinue)
  }

}
