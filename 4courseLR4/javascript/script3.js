let maxNumber = 10
let options = 4
let correctAnswer = 0
let totalAnswers = 0
let correctAnswers = 0
let product



nextTask()

function nextTask() {
    enableRadios()
    const num1 = Math.floor(Math.random() * maxNumber) + 1
    const num2 = Math.floor(Math.random() * maxNumber) + 1
    const task = document.getElementById('task')
    task.innerHTML = `${num1} * ${num2} =`
    product = num1 * num2
    const correctOption = Math.floor(Math.random() * options) + 1

    document.getElementById("firstoption").innerHTML = Math.floor(Math.random() * 100) + 1
    document.getElementById("secondoption").innerHTML = Math.floor(Math.random() * 100) + 1
    document.getElementById("thirdoption").innerHTML = Math.floor(Math.random() * 100) + 1
    document.getElementById("fourthoption").innerHTML = Math.floor(Math.random() * 100) + 1

    switch (correctOption) {
        case 1:
            document.getElementById("firstoption").innerHTML = product;
            correctAnswer = 1
            break;
        case 2:
            document.getElementById("secondoption").innerHTML = product;
            correctAnswer = 2
            break;
        case 3:
            document.getElementById("thirdoption").innerHTML = product;
            correctAnswer = 3
            break;
        case 4:
            document.getElementById("fourthoption").innerHTML = product;
            correctAnswer = 4;
            break;
    }
}



function checkAnswer(selectedOption) {
    
    disableRadios()
    totalAnswers++;
    document.getElementById("totalAnswers").innerText = totalAnswers;

    if (selectedOption === correctAnswer) {
        correctAnswers++;
        document.getElementById("correctAnswers").innerText = correctAnswers;
        const result = document.getElementById('result')
        result.textContent = 'Відповідь правильна'
    }
    else{
        result.textContent = `Помилка, правильна відповідь "${product}"`
    }
    document.getElementById('score').textContent = Math.floor((correctAnswers/totalAnswers) * 100)
    
}

function disableRadios() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
    radio.checked = false
    radio.disabled = true
    })
  }

  function enableRadios() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
      radio.disabled = false
    })
  }