const betAmount = document.getElementById('betAmount')
const result = document.getElementById('result')

function placeBet()
{
    let betValue = betAmount.value
    console.log(betValue)

    let randomValue = Math.floor(Math.random() * 11 - 5)
    console.log(randomValue) 

    if(isNaN(betValue) || betValue <= 0)
    {
        result.textContent = 'Введіть коректне число'
        return
    }
    
    result.textContent = 'Перевіряємо результат'
    setTimeout(calculating, 1000)

    function calculating()
    {
        if(randomValue <= 0)
        {
            
            result.textContent = 'Ви програли'
        }
        else
        {
            result.textContent = 'Ви виграли ' + randomValue * betValue + ' гривень'
        }
    }
    
}


