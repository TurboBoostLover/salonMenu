const schedule = document.querySelector('#schedule')
const pay = document.querySelector('#pay')

const error = () => {
    alert('Sorry that has not been made yet')
}

const calender = () => {
    window.location.href=("https://calendar.google.com/calendar")
}

pay.addEventListener('click', error)
schedule.addEventListener('click', calender)