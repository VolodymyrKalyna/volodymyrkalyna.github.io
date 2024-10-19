function time() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if(hours < 10)
    hours = "0" + hours
    
    if(minutes < 10)
    minutes = "0" + minutes

    if(seconds < 10)
    seconds = "0" + seconds

    document.getElementById('chas').value = hours + ":" + minutes + ":" + seconds;

    setTimeout(time, 1000);
}

time();