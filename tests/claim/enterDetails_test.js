'use strict'

Feature('Claimant Enter details of claim')

Scenario('I can fill in my and their details', (I, userSteps) => {
  userSteps.loginDefaultUser();
  userSteps.startClaim();
  userSteps.enterYourDetails();

})

