'use strict'

Feature('Enter claim amount and submit claim')

Scenario('I can fill in Claimant, Defendant and Claim amount details', (I, userSteps, defendantSteps, amountClaimSteps) => {
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
  defendantSteps.enterDefendantTypeOrganisation()
  I.see('Defendant: Def corporation')
  defendantSteps.enterDefendantAddress()
  defendantSteps.enterDefendantRepsCompanyName()
  I.see("Defendant's representative: Defendant Rep Ltd")
  defendantSteps.enterDefendantRepsAddress()
  defendantSteps.noAnotherDefendant()
  amountClaimSteps.personalInjuryLessThan1000()
  amountClaimSteps.housingDisrepairLessThan1000()
  amountClaimSteps.summariseTheClaim()
  amountClaimSteps.enterRangeOfTheClaim()
  amountClaimSteps.feeCheckForRangeTotal()
})

Scenario('I can fill in Claimant, Defendant and Claim amount details', (I, userSteps, defendantSteps, amountClaimSteps) => {
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
  defendantSteps.enterDefendantTypeOrganisation()
  I.see('Defendant: Def corporation')
  defendantSteps.enterDefendantAddress()
  defendantSteps.enterDefendantRepsCompanyName()
  I.see("Defendant's representative: Defendant Rep Ltd")
  defendantSteps.enterDefendantRepsAddress()
  defendantSteps.noAnotherDefendant()
  amountClaimSteps.noPersonalInjuryClaim()
  amountClaimSteps.summariseTheClaim()
  amountClaimSteps.canNotStateTheClaimValue()
  amountClaimSteps.feeCheckForCanNotStateTheClaimValue()
})

Scenario('Check personal injury more than 1000', (I, userSteps, amountClaimSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  amountClaimSteps.personalInjuryMoreThan1000()
  I.seeInCurrentUrl('housing-disrepair')
})

Scenario('Check housing disrepair more than 1000', (I, userSteps, amountClaimSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  amountClaimSteps.housingDisrepairMoreThan1000()
  I.seeInCurrentUrl('summarise-the-claim')
})

Scenario('Check housing disrepair less than 1000 and no other damages', (I, userSteps, amountClaimSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  amountClaimSteps.housingDisrepairLessThan1000AndNoOtherDamages()
  I.seeInCurrentUrl('/total')
})

Scenario('Check higher value in amount claim Page', (I, userSteps, amountClaimSteps) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  amountClaimSteps.enterOnlyHigherValueAmount()
  I.seeInCurrentUrl('summarise-the-claim')
})

Scenario('Check Error Messages in personal claim page', (I, userSteps, personalInjuryPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  personalInjuryPage.open()
  personalInjuryPage.checkMandatoryErrorMessage()
  personalInjuryPage.checkMandatoryErrorMessageForAmount()
})

Scenario('Check Error Messages in housing disrepair page', (I, userSteps, housingDisrepairPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  housingDisrepairPage.open()
  housingDisrepairPage.checkMandatoryErrorMessage()
  housingDisrepairPage.checkMandatoryErrorMessageForAmounts()
})

Scenario('Check Error Messages in summarise the claim page', (I, userSteps, summariseTheClaimPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  summariseTheClaimPage.open()
  summariseTheClaimPage.checkMandatoryErrorMessage()
  summariseTheClaimPage.checkForBlankErrorMessage()
})

Scenario('Check Error Messages in amount claim page', (I, userSteps, amountPage) => {
  userSteps.loginDefaultUser()
  userSteps.startClaim()
  amountPage.open()
  amountPage.checkMandatoryErrorMessage()
  amountPage.checkForBlankErrorMessage()
  amountPage.checkErrorMessageForLowerValueOnly()
  amountPage.checkErrorMessageForSelectingBothHigherAndCanNotCheckbox()
})
