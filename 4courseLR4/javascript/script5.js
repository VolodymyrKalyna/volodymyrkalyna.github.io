let span = []
const container = document.getElementById('container')
let itsnumber = []
let totalNumber;
const answer = document.getElementById('answer')
const feedback = document.getElementById('feedback')

for(let i=0; i < 100; i++)
    {
        span[i] = document.createElement('span')
        container.appendChild(span[i])
    }



start(3)

function start(numbers){

    feedback.textContent = ''
    answer.value = ''

    for(let i=0; i < 100; i++)
    {
        span[i].classList.remove('red')
        
    }    

    for(let i=0; i < numbers; i++)
    {
        itsnumber[i] = Math.floor(Math.random() * 9) + 1

        switch(itsnumber[i])
        {
            case 1: 
            
            span[0 + i*20].className = 'red'
            span[1 + i*20].className = 'red'
            span[2 + i*20].className = 'red'
            span[3 + i*20].className = 'red'
            span[4 + i*20].className = 'red'

            break;

            case 2:
            
            span[0 + i*20].className = 'red'
            span[5 + i*20].className = 'red'
            span[11 + i*20].className = 'red'
            span[7 + i*20].className = 'red'
            span[3 + i*20].className = 'red'
            span[9 + i*20].className = 'red'
            span[14 + i*20].className = 'red'
            span[10 + i*20].className = 'red'
            span[4 + i*20].className = 'red'

            break;

            case 3:

            span[0 + i*20].className = 'red'
            span[4 + i*20].className = 'red'
            span[5 + i*20].className = 'red'
            span[7 + i*20].className = 'red'
            span[9 + i*20].className = 'red'
            span[10 + i*20].className = 'red'
            span[11 + i*20].className = 'red'
            span[13 + i*20].className = 'red'
            span[14 + i*20].className = 'red'

            break;

            case 4:

            span[0 + i*20].className = 'red'
            span[1 + i*20].className = 'red'
            span[2 + i*20].className = 'red'
            span[7 + i*20].className = 'red'
            span[10 + i*20].className = 'red'
            span[11 + i*20].className = 'red'
            span[12 + i*20].className = 'red'
            span[13 + i*20].className = 'red'
            span[14 + i*20].className = 'red'

            break;

            case 5:

            span[0 + i*20].className = 'red'
            span[1 + i*20].className = 'red'
            span[2 + i*20].className = 'red'
            span[7 + i*20].className = 'red'
            span[12 + i*20].className = 'red'
            span[13 + i*20].className = 'red'
            span[14 + i*20].className = 'red'
            span[4 + i*20].className = 'red'
            span[5 + i*20].className = 'red'
            span[9 + i*20].className = 'red'
            span[10 + i*20].className = 'red'

            break;

            case 6:

            span[0 + i*20].className = 'red'
            span[1 + i*20].className = 'red'
            span[2 + i*20].className = 'red'
            span[3 + i*20].className = 'red'
            span[4 + i*20].className = 'red'
            span[5 + i*20].className = 'red'
            span[10 + i*20].className = 'red'
            span[7 + i*20].className = 'red'
            span[12 + i*20].className = 'red'
            span[9 + i*20].className = 'red'
            span[13 + i*20].className = 'red'
            span[14 + i*20].className = 'red'

            break;

            case 7:

            span[0 + i*20].className = 'red'
            span[5 + i*20].className = 'red'
            span[10 + i*20].className = 'red'
            span[11 + i*20].className = 'red'
            span[7 + i*20].className = 'red'
            span[8 + i*20].className = 'red'
            span[9 + i*20].className = 'red'

            break;

            case 8:

            span[0 + i*20].className = 'red'
            span[1 + i*20].className = 'red'
            span[2 + i*20].className = 'red'
            span[3 + i*20].className = 'red'
            span[4 + i*20].className = 'red'
            span[5 + i*20].className = 'red'
            span[7 + i*20].className = 'red'
            span[9 + i*20].className = 'red'
            span[10 + i*20].className = 'red'
            span[11 + i*20].className = 'red'
            span[12 + i*20].className = 'red'
            span[13 + i*20].className = 'red'
            span[14 + i*20].className = 'red'

            break;

            case 9:

            span[0 + i*20].className = 'red'
            span[1 + i*20].className = 'red'
            span[2 + i*20].className = 'red'
            span[4 + i*20].className = 'red'
            span[5 + i*20].className = 'red'
            span[7 + i*20].className = 'red'
            span[9 + i*20].className = 'red'
            span[10 + i*20].className = 'red'
            span[11 + i*20].className = 'red'
            span[12 + i*20].className = 'red'
            span[13 + i*20].className = 'red'
            span[14 + i*20].className = 'red'

            break;

        }


    }

    totalNumber = parseInt(itsnumber.join(''))
    
}



answer.addEventListener('input', function(){
    if(answer.value == totalNumber)
    {
        feedback.textContent = 'Правильно'
        feedback.className = 'textgreen'
    }
    else
    {
        feedback.textContent = 'Помилка'
        feedback.className = 'textred'
    }
        
})