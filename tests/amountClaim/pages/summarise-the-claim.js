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

  },

  open () {
    I.amOnPage('/claim/summarise-the-claim')
  }
}
