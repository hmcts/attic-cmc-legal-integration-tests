'use strict'

Feature('Claimant Enter details of claim')

Scenario('I can fill in two claimants and update their details', (I, userSteps) => {
  userSteps.loginAndStartClaim()
  userSteps.enterClaimantServiceDetails()
  userSteps.enterClaimantTypeIndividual()
  I.see('Claimant: Mr Benugo')
  userSteps.enterClaimantAddress()
  userSteps.addAdditionalClaimant()
  userSteps.enterClaimantTypeIndividual()
  I.see('Claimant 2: Mr Benugo')
  userSteps.enterClaimantAddress()
  userSteps.verifyAndChangeClaimantDetails()
})

Scenario('I can save organisation details and populate them in a subsequent claim via cookie info', (I, userSteps) => {
  userSteps.loginAndStartClaim()
  userSteps.enterClaimantServiceDetails()
  userSteps.startClaim()
  userSteps.verifyOrganizationDetails()
})

Scenario('Check Error Messages in Add additional claimant Page', (I, userSteps, claimantAdd) => {
  userSteps.loginAndStartClaim()
  userSteps.enterClaimantServiceDetails()
  userSteps.enterClaimantTypeIndividual()
  I.see('Claimant: Mr Benugo')
  userSteps.enterClaimantAddress()
  claimantAdd.checkMandatoryErrorMessageForChooseClaimant()
})

Scenario('Check Error Messages in Your organisation name Page', (I, userSteps, enterYourOrganisationNamePage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  enterYourOrganisationNamePage.checkMandatoryErrorMessage()
  enterYourOrganisationNamePage.checkForBlankErrorMessage()
})

Scenario('Check Error Messages in Enter your organisation address Page', (I, userSteps, enterYourOrganisationAddressPage) => {
  userSteps.loginAndStartClaim()
  userSteps.enterYourOrganisationNamePage()
  enterYourOrganisationAddressPage.checkMandatoryErrorMessage()
  enterYourOrganisationAddressPage.checkForBlankErrorMessage()
  enterYourOrganisationAddressPage.checkForIndividualMessage()
  enterYourOrganisationAddressPage.checkForAddressLineLength()
  enterYourOrganisationAddressPage.checkForPostCodeLengthMessage()
})

Scenario('Check Error Messages in Enter your organisation contact details Page', (I, userSteps, enterYourOrganisationContactDetails) => {
  userSteps.loginAndStartClaim()
  userSteps.enterYourOrganisationNamePage()
  userSteps.enterYourOrganisationAddress()
  enterYourOrganisationContactDetails.checkPhoneNumberLengthValidation()
  enterYourOrganisationContactDetails.checkEmptyOrInvalidPhoneNumberValidation()
  enterYourOrganisationContactDetails.checkForEmailFormatErrorMessage()
})

Scenario('Check Error Messages in claimant type Page', (I, userSteps, claimantType) => {
  userSteps.loginAndStartClaim()
  claimantType.open()
  claimantType.checkMandatoryErrorMessageForChooseClaimant()
  claimantType.checkMandatoryErrorMessageForOrganisationName()
  claimantType.checkForBlankErrorMessageForOrganisationName()
  claimantType.checkMandatoryErrorMessageForIndividualName()
  claimantType.checkForBlankErrorMessageForIndividualName()
})

Scenario('Check Error Messages in Enter your claimant address Page', (I, userSteps, claimantType, claimantAddress) => {
  userSteps.loginAndStartClaim()
  claimantType.open()
  userSteps.enterClaimantTypeOrganisation()
  claimantAddress.checkMandatoryErrorMessage()
  claimantAddress.checkForBlankErrorMessage()
  claimantAddress.checkForIndividualMessage()
  claimantAddress.checkForAddressLineLength()
  claimantAddress.checkForPostCodeLengthMessage()
})
