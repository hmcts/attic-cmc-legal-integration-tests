const email = `user-${require('randomstring').generate(7)}@example.com`

exports.user = {
  email: email,
  password: 'Password123'
}

exports.submitPageData = {
  downloadPDFLink: 'Download the sealed claim form',
  claimIssuedText: 'Your claim has been issued',
  emailConfirmation: 'We\'ve emailed confirmation to: ',
  feesPaid: 'Fee paid: £455',
  followSteps: 'Follow these steps to serve a claim:',
  followStepsPoint1: '1. Download the sealed claim form (this will open in a new window).',
  followStepsPoint2: '2. Send the form, particulars of claim and a response pack to the defendant within 4 months of the date of issue.',
  followStepsPoint3: '3. Send the court a certificate of service and a copy of any documents you served on the defendant, within 21 days of service.',
  courtAddress: {
    line1: 'County Court Money Claims Centre (CCMCC)',
    line2: 'Salford',
    city: 'Greater Manchester',
    postcode: 'M5 0BY',
    dxNumber: 'DX: 702634 Salford 5'
  }
}
