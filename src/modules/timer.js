const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor(timeRemaining / 60 / 60)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, hours, minutes, seconds }
    }

    const padZero = (value) => {
        return value < 10 ? '0' + value : value
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()

        if (getTime.timeRemaining > 0) {
            timerHours.textContent = padZero(getTime.hours)
            timerMinutes.textContent = padZero(getTime.minutes)
            timerSeconds.textContent = padZero(getTime.seconds)
        } else {
            clearInterval(timerInterval)
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'
        }
    }

    const timerInterval = setInterval(updateClock, 1000)

    updateClock()
}

export default timer
