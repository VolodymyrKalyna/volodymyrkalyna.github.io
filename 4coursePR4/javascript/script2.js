let time = new Date()
const clockDisplay = document.getElementById('clockDisplay')


function updateTime()
{
    
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()

    if(hours < 10)
    hours = "0" + hours
    
    if(minutes < 10)
    minutes = "0" + minutes

    if(seconds < 10)
    seconds = "0" + seconds

    clockDisplay.textContent = hours + ":" + minutes + ":" + seconds

    setTimeout(updateTime,5000)
}

updateTime()
shutdown()

function shutdown()
{
    setTimeout(() =>{window.close()}, 30000)
}
