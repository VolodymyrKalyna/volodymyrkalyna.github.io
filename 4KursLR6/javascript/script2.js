const result = document.getElementById('result')
function compareNumbers(num1, num2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num1 > num2) {
                resolve("Перше число більше");
            } else if (num1 < num2) {
                resolve("Друге число більше");
            } else {
                reject("Числа рівні");
            }
        }, 1000);
    });
}

// Використовуємо then і catch для обробки результату
compareNumbers(5, 6)
    .then(result => {
        console.log(result);  // Виведе: Перше число більше
        document.getElementById('result').textContent = result;
    })
    .catch(error => {
        console.log(error);  // Виведе: Числа рівні, якщо числа рівні
        document.getElementById('result').textContent = error;
    });