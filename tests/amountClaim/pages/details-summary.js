'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {

  },
  buttons: {
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/details-summary')
  },

  verifyOrganizationDetails () {
    I.see('Your organisation details')
  }


}
