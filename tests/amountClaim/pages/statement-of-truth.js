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

  },

  open () {
    I.amOnPage('/claim/statement-of-truth')
  }
}
