'use strict'

const user = require('../../../test-data').user;

let loginPage, startClaimPage,enterYourDetailsPage;
module.exports = {

  _init () {
    loginPage = require('../pages/login');
    startClaimPage = require('../../claim/pages/claimant-start-claim');
    enterYourDetailsPage=require('../../claim/pages/claimant-representative-name');
    },
  loginDefaultUser () {
    loginPage.open();
    loginPage.login(user.email, user.password)
  },
  startClaim () {
    startClaimPage.open();
    startClaimPage.startClaim()
  },
  enterYourDetails()
  {
    enterYourDetailsPage.open();
    enterYourDetailsPage.enterYourDetails();
  }


}
