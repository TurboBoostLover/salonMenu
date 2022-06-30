const schedule = document.querySelector('#schedule')
const pay = document.querySelector('#pay')
const test = document.querySelector('#test')

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'c0e7a2d7410049cea6702e3cc737f36f',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const error = () => {
    rollbar.error('Big error they got into')
    alert('Sorry that has not been made yet')
}

const calender = () => {
    rollbar.info('Some one trying to schedule')
    window.location.href=("https://calendar.google.com/calendar")
}

const payMe = () => {
    rollbar.info('Some one is paying!')
    window.location.href=("https://venmo.com/Nathan-Westergard")
}

pay.addEventListener('click', payMe)
schedule.addEventListener('click', calender)
test.addEventListener('click'. error)
