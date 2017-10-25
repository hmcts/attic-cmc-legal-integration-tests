'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    phoneNumber: 'input[id=phoneNumber]',
    email: 'input[id=email]',
    dxAddress: 'input[id=dxAddress]'
  },
  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnPage('/legal/claim/representative-contacts')
  },

  enterYourOrganisationContactDetails () {
    I.fillField(this.fields.phoneNumber, '0700000000')
    I.fillField(this.fields.email, 'vivred@mailinator.com')
    I.fillField(this.fields.dxAddress, 'DX123')
    I.click(this.buttons.saveAndContinue)
  },

  checkPhoneNumberLengthValidation () {
    I.fillField(this.fields.phoneNumber, '070000000000')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid phone number')
    I.fillField(this.fields.phoneNumber, '070000000')
    I.click(this.buttons.saveAndContinue)
    I.see('There was a problem')
    I.see('Enter a valid phone number')
  },

  checkEmptyOrInvalidPhoneNumberValidation () {
    I.fillField(this.fields.phoneNumber, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid phone number')
    I.fillField(this.fields.phoneNumber, '0000000000')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid phone number')
  },

  checkForEmailFormatErrorMessage () {
    I.fillField(this.fields.email, ' ')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid email address')
    I.fillField(this.fields.email, 'vivred@mailiantor')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid email address')
    I.fillField(this.fields.email, 'vivred.com')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter a valid email address')
  }
}
