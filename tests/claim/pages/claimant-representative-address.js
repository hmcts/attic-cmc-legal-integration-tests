'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    addressLine1: 'input[id=line1]',
    addressLine2: 'input[id=line2]',
    cityName: 'input[id=city]',
    postcode: 'input[id=postcode]'
  },
  buttons: {
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/representative-address')
  },

  enterYourOrganisationAddress () {
    I.see('Your organisation address')
    I.see('Address line 1')
    I.fillField(this.fields.addressLine1, 'MOJ')
    I.see('Address line 2 (optional)')
    I.fillField(this.fields.addressLine2, 'Westminster')
    I.see('Town or city (optional)')
    I.fillField(this.fields.cityName, 'London')
    I.see('Postcode')
    I.fillField(this.fields.postcode, 'SW1H 9AJ')
    I.click(this.buttons.saveandContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter address line 1')
    I.see('Enter a postcode')
  },

  checkForBlankErrorMessage () {
    I.fillField(this.fields.addressLine1, '')
    I.fillField(this.fields.postcode, '')
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter address line 1')
    I.see('Enter a postcode')
  },

  checkForIndividualMessage () {
    I.fillField(this.fields.addressLine1, '')
    I.fillField(this.fields.postcode, 'SW1H 9AJ')
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter address line 1')
    I.fillField(this.fields.addressLine1, 'MOJ')
    I.fillField(this.fields.postcode, '')
    I.click(this.buttons.saveandContinue)
    I.see('Enter a postcode')
  },

  checkForPostCodeLengthMessage () {
    I.fillField(this.fields.addressLine1, 'MOJ')
    I.fillField(this.fields.postcode, 'SW1H 9AJ1')
    I.click(this.buttons.saveandContinue)
    I.see('You’ve entered too many characters')
  },
  checkForAddressLineLength () {
    I.fillField(this.fields.addressLine1, 'a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789')
    I.fillField(this.fields.postcode, 'SW1H 9AJ')
    I.click(this.buttons.saveandContinue)
    I.see('You’ve entered too many characters')
  }
}
