'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    useDefendantsAddress: 'input[id=defendantsAddressYES]',
    useAnotherAddress: 'input[id=defendantsAddressNO]',
    addressLine1: 'input[id=line1]',
    addressLine2: 'input[id=line2]',
    cityName: 'input[id=city]',
    postcode: 'input[id=postcode]'
  },
  buttons: {
    saveandContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/defendant-service-address')
  },

  enterAnotherServiceAddress () {
    I.see('Use another address')
    I.checkOption(this.fields.useAnotherAddress)
    I.see('Address line 1')
    I.fillField(this.fields.addressLine1, 'CMC T2')
    I.see('Address line 2 (optional)')
    I.fillField(this.fields.addressLine2, 'Westminster')
    I.see('Town or city')
    I.fillField(this.fields.cityName, 'London')
    I.see('Postcode')
    I.fillField(this.fields.postcode, 'SW1H 9AJ')
    I.click(this.buttons.saveandContinue)
  },

  checkMandatoryErrorMessageForAddressForService () {
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Choose which address to use')
  },

  checkForBlankErrorMessage () {
    I.see('Use another address')
    I.checkOption(this.fields.useAnotherAddress)
    I.fillField(this.fields.addressLine1, '')
    I.fillField(this.fields.postcode, '')
    I.click(this.buttons.saveandContinue)
    I.see('There was a problem')
    I.see('Enter address line 1')
    I.see('Enter a postcode')
  },

  checkForIndividualMessage () {
    I.see('Use another address')
    I.checkOption(this.fields.useAnotherAddress)
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
    I.see('Use another address')
    I.checkOption(this.fields.useAnotherAddress)
    I.fillField(this.fields.addressLine1, 'MOJ')
    I.fillField(this.fields.postcode, 'SW1H 9AJ1')
    I.click(this.buttons.saveandContinue)
    I.see('You’ve entered too many characters')
  },

  checkForAddressLineLength () {
    I.see('Use another address')
    I.checkOption(this.fields.useAnotherAddress)
    I.fillField(this.fields.addressLine1, 'a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789a123456789')
    I.fillField(this.fields.postcode, 'SW1H 9AJ')
    I.click(this.buttons.saveandContinue)
    I.see('You’ve entered too many characters')
  }
}
