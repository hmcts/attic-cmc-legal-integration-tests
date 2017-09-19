'use strict'
/* global actor */

let I

module.exports = {

  _init () {
    I = actor()
  },
  fields: {
    signerName: 'input[id=signerName]',
    signerRole: 'input[id=signerRole]'
  },
  buttons: {
    saveAndContinue: 'input.button'
  },

  open () {
    I.amOnPage('/claim/statement-of-truth')
  },

  enterStatementOfTruthSignerNameAndRole () {
    I.see('Statement of truth')
    I.see("The claimant believes that the facts in this claim form are true. I'm duly authorised by the claimant to sign this statement.")
    I.fillField(this.fields.signerName, 'vivred')
    I.fillField(this.fields.signerRole, 'QA')
    I.see('Abc Organisation')
    I.click(this.buttons.saveAndContinue)
  },

  checkMandatoryErrorMessage () {
    I.click(this.buttons.saveAndContinue)
    I.see('There was a problem')
    I.see('Enter the name of the person signing the statement')
    I.see('Enter the role of the person signing the statement')
  },

  checkForBlankErrorMessage () {
    I.fillField(this.fields.signerName, '')
    I.fillField(this.fields.signerRole, '')
    I.click(this.buttons.saveAndContinue)
    I.see('There was a problem')
    I.see('Enter the name of the person signing the statement')
    I.see('Enter the role of the person signing the statement')
  },

  checkForIndividualMessage () {
    I.fillField(this.fields.signerName, '')
    I.fillField(this.fields.signerRole, 'QA')
    I.click(this.buttons.saveAndContinue)
    I.see('There was a problem')
    I.see('Enter the name of the person signing the statement')
    I.fillField(this.fields.signerName, 'vivred')
    I.fillField(this.fields.signerRole, '')
    I.click(this.buttons.saveAndContinue)
    I.see('Enter the role of the person signing the statement')
  }
}
