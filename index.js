const schedule = document.querySelector('#schedule')
const pay = document.querySelector('#pay')
const about = document.querySelector('#about')
const services = document.querySelector('#services')
const clients = document.querySelector('#clients')
const contact = document.querySelector('#contact')


const error = () => {
    alert('Sorry that has not been made yet')
}

const calender = () => {
    window.location.href=("https://calendar.google.com/calendar")
}

pay.addEventListener('click', error)
schedule.addEventListener('click', calender)
about.addEventListener('click', error)
services.addEventListener('click', error)
clients.addEventListener('click', error)
contact.addEventListener('click', error)