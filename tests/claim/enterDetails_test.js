'use strict'

Feature('Claimant Enter details of claim')

Scenario('I can fill in my and their details', (I, userSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourDetails()
  userSteps.enterYourCompanyAddress()
  userSteps.enterYourCompanyContactDetails()
  userSteps.enterYourReferenceNumber()
  userSteps.enterYourPreferredCountyCourt()

})

Scenario('Check Error Messages in Enter your details Page', (I, userSteps, enterYourDetailsPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  enterYourDetailsPage.checkMandatoryErrorMessage()
  enterYourDetailsPage.checkForBlankErrorMessage()
})

Scenario('Check Error Messages in Enter your details Page', (I, userSteps, enterYourCompanyAddressPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourDetails()
  enterYourCompanyAddressPage.checkMandatoryErrorMessage()
  enterYourCompanyAddressPage.checkForBlankErrorMessage()
  enterYourCompanyAddressPage.checkForIndividualMessage()
  enterYourCompanyAddressPage.checkForAddressLineLength()
  enterYourCompanyAddressPage.checkForPostCodeLengthMessage()
})

Scenario('Check Error Messages in Enter your details Page', (I, userSteps, enterYourCompanyContactDetails) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourDetails()
  userSteps.enterYourCompanyAddress()
  enterYourCompanyContactDetails.open
  enterYourCompanyContactDetails.checkPhoneNumberLengthValidation()
  enterYourCompanyContactDetails.checkEmptyOrInvalidPhoneNumberValidation()
  enterYourCompanyContactDetails.checkForEmailFormatErrorMessage()
})
