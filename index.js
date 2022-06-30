const schedule = document.querySelector('#schedule')
const pay = document.querySelector('#pay')



const error = () => {
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
