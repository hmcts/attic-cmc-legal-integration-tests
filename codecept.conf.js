const ProxySettings = require('./proxy-settings')
const pageDefinitions = require('./page-definitions')

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
    },
    DownloadPdfHelper: {
      require: './helpers/downloadPdfHelper'
    }
  },
  include: pageDefinitions
}
