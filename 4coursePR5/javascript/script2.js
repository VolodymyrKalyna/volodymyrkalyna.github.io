let date = new Date()

let options = {
    day : '2-digit',
    month : '2-digit',
    year : '2-digit',
    hour : '2-digit',
    minute : '2-digit'
}

const button = document.getElementById('button')
const output = document.getElementById('output')
button.addEventListener('click', () => formatDate(date))



function formatDate(date)
{
    let dateNow = new Date()
    let difference = (dateNow - date) / 1000
    console.log(difference)

    if(difference < 1)
        output.textContent = "Прямо зараз"
        
    else if(difference < 60)
        output.textContent = `${Math.floor(difference)} секунд тому`
    else if(difference < 3600)
        output.textContent = `${Math.floor(difference / 60)} хвилин тому`
    else
        output.textContent = date.toLocaleDateString('uk-UK', options)

}