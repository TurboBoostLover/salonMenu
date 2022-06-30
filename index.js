const schedule = document.querySelector('#schedule')
const pay = document.querySelector('#pay')
const test = document.querySelector('#test')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'fefb3ab4b78342ab98bc8a1af3e4f3cc',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const error = () => {
    rollbar.error('Someone sent an error.')
    alert('Sorry that has not been made yet')
}

const calender = () => {
    window.location.href=("https://calendar.google.com/calendar")
}

const payMe = () => {
    window.location.href=("https://venmo.com/Nathan-Westergard")
}

pay.addEventListener('click', payMe)
schedule.addEventListener('click', calender)
test.addEventListener('click', error)
