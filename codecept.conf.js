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
      url: process.env.URL || 'https://localhost:4000',
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
    enterYourDetailsPage: './tests/claim/pages/claimant-representative-name',
    enterYourCompanyAddressPage: './tests/claim/pages/claimant-representative-address',

    userSteps: './tests/home/steps/user.js'
  },
  mocha: {
    reporterOptions: {
     // mochaFile: './output/integration-result.xml'
      reportDir: './output',
      inlineAssets: true
    }
  }
}
