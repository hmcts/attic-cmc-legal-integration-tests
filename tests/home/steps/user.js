'use strict'

const user = require('../../../test-data').user

let loginPage, startClaimPage, taskListPage
module.exports = {

  _init () {
    loginPage = require('../pages/login')
  },

  loginDefaultUser () {
    loginPage.open()
    loginPage.login(user.email, user.password)
  }

}
