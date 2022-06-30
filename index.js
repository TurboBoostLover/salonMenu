const schedule = document.querySelector('#schedule')
const pay = document.querySelector('#pay')
const test = document.querySelector('#test')



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
