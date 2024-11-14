function getRandomNumberAfterDelay(delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            resolve(randomNumber);
        }, delay);
    });
}

const promise1 = getRandomNumberAfterDelay(1000);
const promise2 = getRandomNumberAfterDelay(2000);
const promise3 = getRandomNumberAfterDelay(3000);

Promise.all([promise1, promise2, promise3])
    .then(results => {
        const sum = results.reduce((acc, num) => acc + num, 0);
        document.getElementById('result').textContent = `Сума всіх значень: ${sum}`;
    })
    .catch(error => {
        document.getElementById('result').textContent = `Помилка: ${error}`;
    });
