'use strict'

let personalInjuryPage, housingDisrepairPage, summariseTheClaimPage, amountPage, totalPage, detailsSummaryPage, statementOfTruthPage, payByAccountPage, submittedPage

module.exports = {
  _init () {
    personalInjuryPage = require('../../amountClaim/pages/personal-injury')
    housingDisrepairPage = require('../../amountClaim/pages/housing-disrepair')
    summariseTheClaimPage = require('../../amountClaim/pages/summarise-the-claim')
    amountPage = require('../../amountClaim/pages/amount')
    totalPage = require('../../amountClaim/pages/total')
    detailsSummaryPage = require('../../amountClaim/pages/details-summary')
    statementOfTruthPage = require('../../amountClaim/pages/statement-of-truth')
    payByAccountPage = require('../../amountClaim/pages/pay-by-account')
    submittedPage = require('../../amountClaim/pages/submitted')
  },

  openPage  () {
    personalInjuryPage.open()
    housingDisrepairPage.open()
    summariseTheClaimPage.open()
    amountPage.open()
    totalPage.open()
    detailsSummaryPage.open()
    statementOfTruthPage.open()
    payByAccountPage.open()
    submittedPage.open()
  },

  personalInjuryLessThan1000 () {
    personalInjuryPage.enterPersonalInjuryLessThan1000()
  },

  personalInjuryMoreThan1000 () {
    personalInjuryPage.open()
    personalInjuryPage.enterPersonalInjuryMoreThan1000()
  },

  noPersonalInjuryClaim () {
    personalInjuryPage.noPersonalInjury()
  }
}
