'use strict'

Feature('Claimant Enter details of claim')

Scenario('I can fill in Claimant organization and their details', (I, userSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourDetails()
  userSteps.enterYourOrganisationAddress()
  userSteps.enterYourOrganisationContactDetails()
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
  userSteps.enterYourOrganisationAddress()
  userSteps.enterYourOrganisationContactDetails()
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

Scenario('Check Error Messages in Enter your organisation address Page', (I, userSteps, enterYourOrganisationAddressPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourDetails()
  enterYourOrganisationAddressPage.checkMandatoryErrorMessage()
  enterYourOrganisationAddressPage.checkForBlankErrorMessage()
  enterYourOrganisationAddressPage.checkForIndividualMessage()
  enterYourOrganisationAddressPage.checkForAddressLineLength()
  enterYourOrganisationAddressPage.checkForPostCodeLengthMessage()
})

Scenario('Check Error Messages in Enter your organisation contact details Page', (I, userSteps, enterYourOrganisationContactDetails) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourDetails()
  userSteps.enterYourOrganisationAddress()
  enterYourOrganisationContactDetails.checkPhoneNumberLengthValidation()
  enterYourOrganisationContactDetails.checkEmptyOrInvalidPhoneNumberValidation()
  enterYourOrganisationContactDetails.checkForEmailFormatErrorMessage()
})

Scenario('Check Error Messages in claimant type Page', (I, userSteps, claimantType) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourDetails()
  userSteps.enterYourOrganisationAddress()
  userSteps.enterYourOrganisationContactDetails()
  userSteps.enterYourReferenceNumber()
  userSteps.enterYourPreferredCountyCourt()
  claimantType.checkMandatoryErrorMessageForChooseClaimant()
  claimantType.checkMandatoryErrorMessageForOrganisationName()
  claimantType.checkForBlankErrorMessageForOrganisationName()
  claimantType.checkMandatoryErrorMessageForIndividualName()
  claimantType.checkForBlankErrorMessageForIndividualName()
})

Scenario('Check Error Messages in Enter your claimant address Page', (I, userSteps, claimantAddress) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  userSteps.enterYourDetails()
  userSteps.enterYourOrganisationAddress()
  userSteps.enterYourOrganisationContactDetails()
  userSteps.enterYourReferenceNumber()
  userSteps.enterYourPreferredCountyCourt()
  userSteps.enterClaimantTypeOrganisation()
  claimantAddress.checkMandatoryErrorMessage()
  claimantAddress.checkForBlankErrorMessage()
  claimantAddress.checkForIndividualMessage()
  claimantAddress.checkForAddressLineLength()
  claimantAddress.checkForPostCodeLengthMessage()
})

