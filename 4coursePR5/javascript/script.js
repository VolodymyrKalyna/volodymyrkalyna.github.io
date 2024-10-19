let date = new Date(2021, 1, 20, 3, 12)

const output = document.getElementById('output')
const output2 = document.getElementById('output2')

output.textContent = date.toLocaleString()

let options = {
    weekday : 'short'
}

date.getDay()

function getWeekDay(date)
{
    return date.toLocaleString('uk-UK',options).toUpperCase()

     
}

alert(getWeekDay(date))

function getLastDayOfMonth(year, month)
{
    let dateofsons = new Date(year, month + 1, 0)
    console.log(dateofsons)
}

year = 2019
month = 4
getLastDayOfMonth(year, month)


function getSecondsToTomorrow()
{
    let todayDay = new Date()
    let years = todayDay.getFullYear()
    let months = todayDay.getMonth()
    let days = todayDay.getDate()
    let newDay = new Date(years, months, days + 1)
    console.log(newDay)
    let difference = newDay - todayDay
    console.log("До завтрашнього дня " + difference / 1000 + " секунд")
}

getSecondsToTomorrow()