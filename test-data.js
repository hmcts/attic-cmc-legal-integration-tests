const email = `user-${require('randomstring').generate(7)}@example.com`

exports.user = {
  email: email,
  password: 'Password123'
}

exports.verifyPageData = {
  organizationRefNumber: 'PBA1234567',
  emailConfirmation: 'We\'ve emailed confirmation to: ',
  feeAccountNumber: 'PBA0000000',
  feesPaid: '£455',
  maxFeePaid: '10000'
}
