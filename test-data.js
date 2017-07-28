const email = `user-${require('randomstring').generate(7)}@example.com`

exports.user = {
  email: email,
  password: 'Password123'
}
