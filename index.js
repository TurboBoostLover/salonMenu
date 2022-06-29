const schedule = document.querySelector('#schedule')
const pay = document.querySelector('#pay')

const error = () => {
    alert('Sorry that has not been made yet')
}

schedule.addEventListener('click', error)
pay.addEventListener('click', error)