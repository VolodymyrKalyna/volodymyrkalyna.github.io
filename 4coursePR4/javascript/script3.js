const userInput = document.getElementById('userInput')
const output = document.getElementById('output')

function startTypingEffect()
{
    let i=0;
    var array = userInput.value.split('')
    typingInterval = setInterval(() => 
    {
        if(i < array.length)
        {
            output.textContent = output.textContent + array[i]; i++
        }
        else
        {
            clearInterval(typingInterval)
        }
        
    }, 200)
    
}
    
let i=0;
var array = userInput.value.split('')

function startTypingEffect2()
{
    

    if(i < array.length)
    {
        
        output.textContent = output.textContent + array[i];
        i++;
        setTimeout(startTypingEffect2, 200)
    }
    
    
}
