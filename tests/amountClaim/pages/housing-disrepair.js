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
    generalDamagesLess: 'input[id=generalDamages[value]LESS]',
    generalDamagesMore: 'input[id=generalDamages[value]MORE]',
    otherDamagesNone: 'input[id=otherDamages[value]NONE]',
    otherDamagesLess: 'input[id=otherDamages[value]LESS]',
    otherDamagesMore: 'otherDamages[value]MORE]'
  },
  buttons: {
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/housing-disrepair')
  }
}
