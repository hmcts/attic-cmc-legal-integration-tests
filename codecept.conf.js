const ProxySettings = require('./proxy-settings')

exports.config = {
  name: 'legal-integration-tests',
  bootstrap: './bootstrap.js',
  tests: './tests/**/*_test.js',
  output: './output',
  timeout: 10000,
  helpers: {
    WebDriverIO: {
      host: process.env.WEB_DRIVER_HOST || 'localhost',
      port: process.env.WEB_DRIVER_PORT || '4444',
      browser: process.env.BROWSER || 'chrome',
      url: process.env.URL || 'https://localhost:4000/legal',
      waitForTimeout: 15000,
      desiredCapabilities: {
        proxy: new ProxySettings()
      }
    }
  },
  include: {
    homePage: './tests/home/pages/home.js',
    loginPage: './tests/home/pages/login.js',

    startClaimPage: './tests/claim/pages/claimant-start-claim',
    enterYourOrganisationNamePage: './tests/claim/pages/claimant-representative-name',
    enterYourOrganisationAddressPage: './tests/claim/pages/claimant-representative-address',
    enterYourOrganisationContactDetails: './tests/claim/pages/claimant-representative-contacts',
    referencePage: './tests/claim/pages/claimant-reference',
    preferredCountyCourtPage: './tests/claim/pages/claimant-preferred-court',
    claimantType: './tests/claim/pages/claimant-type',
    claimantAddress: './tests/claim/pages/claimant-address',
    claimantAdd: './tests/claim/pages/claimant-add',

    defendantType: './tests/defence/pages/defendant-type',
    defendantAddress: './tests/defence/pages/defendant-address',
    defendantRepresentative: './tests/defence/pages/defendant-represented',
    defendantRepresentativeAddress: './tests/defence/pages/defendant-reps-address',
    defendantAddAnotherDefendant: './tests/defence/pages/defendant-add',
    defendantAddServiceAddress: './tests/defence/pages/defendant-service-address',

    personalInjuryPage: './tests/amountClaim/pages/personal-injury',
    housingDisrepairPage: './tests/amountClaim/pages/housing-disrepair',
    summariseTheClaimPage: './tests/amountClaim/pages/summarise-the-claim',
    amountPage: './tests/amountClaim/pages/amount',
    totalPage: './tests/amountClaim/pages/total',
    detailsSummaryPage: './tests/amountClaim/pages/details-summary',
    statementOfTruthPage: './tests/amountClaim/pages/statement-of-truth',
    payByAccountPage: './tests/amountClaim/pages/pay-by-account',
    submittedPage: './tests/amountClaim/pages/submitted',

    userSteps: './tests/home/steps/user.js',
    defendantSteps: './tests/home/steps/defendant.js',
    amountClaimSteps: './tests/home/steps/amountClaims.js'
  }
}
