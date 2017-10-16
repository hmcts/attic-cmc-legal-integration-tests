'use strict'

/* const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const fs = require('fs')
const request = require('request-promise-native')

let Helper = codecept_helper */
/*
class submitPageHelper extends Helper {
  downloadPDF (url) {
    return request.get({
      uri: url,
      resolveWithFullResponse: true,
      ca: process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    })
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      console.log('URL is: ' + url)
      xhr.open('GET', url, true)
      xhr.onreadystatechange = () => {
        console.log('state: '+ xhr.readyState)
        console.log('status: '+ xhr.statusText)
        console.log(xhr.responseText)
        if (xhr.readyState === XMLHttpRequest.DONE) {
          console.log(xhr.responseText)
          resolve('Success')
        } else {
          reject(Error('XMLHttpRequest failed; error code:' + xhr.statusText))
        }
      }
      xhr.onerror = reject
      xhr.send()
    })
  }
}
module.exports = submitPageHelper
  */
