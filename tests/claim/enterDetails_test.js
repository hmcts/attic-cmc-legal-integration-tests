'use strict'

Feature('Claimant Enter details of claim')

Scenario('I can fill in Claimant organization and their details', (I, userSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourDetails()
  userSteps.enterYourCompanyAddress()
  userSteps.enterYourCompanyContactDetails()
  userSteps.enterYourReferenceNumber()
  userSteps.enterYourPreferredCountyCourt()
  userSteps.enterClaimantTypeOrganisation()
  I.see('Claimant: Abc corporation')
  userSteps.enterClaimantAddress()
})

Scenario('I can fill in Claimant individual and their details', (I, userSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourDetails()
  userSteps.enterYourCompanyAddress()
  userSteps.enterYourCompanyContactDetails()
  userSteps.enterYourReferenceNumber()
  userSteps.enterYourPreferredCountyCourt()
  userSteps.enterClaimantTypeIndividual()
  I.see('Claimant: Mr Benugo')
  userSteps.enterClaimantAddress()
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
  enterYourCompanyContactDetails.checkPhoneNumberLengthValidation()
  enterYourCompanyContactDetails.checkEmptyOrInvalidPhoneNumberValidation()
  enterYourCompanyContactDetails.checkForEmailFormatErrorMessage()
})

Scenario('Check Error Messages in claimant type Page', (I, userSteps, claimantType) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourDetails()
  userSteps.enterYourCompanyAddress()
  userSteps.enterYourCompanyContactDetails()
  userSteps.enterYourReferenceNumber()
  userSteps.enterYourPreferredCountyCourt()
  claimantType.checkMandatoryErrorMessageForChooseClaimant()
  claimantType.checkMandatoryErrorMessageForOrganisationName()
  claimantType.checkForBlankErrorMessageForOrganisationName()
  claimantType.checkMandatoryErrorMessageForIndividualName()
  claimantType.checkForBlankErrorMessageForIndividualName()
})
