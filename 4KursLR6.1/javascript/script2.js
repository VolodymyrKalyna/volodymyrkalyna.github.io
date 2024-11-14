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

function loadData() {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('result').textContent = '';

    compareNumbers(5, 6)
        .then(result => {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('result').textContent = result;
        })
        .catch(error => {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('result').textContent = error;
        });
}

loadData();

const result = document.getElementById('result')


    .then(result => {
        console.log(result);
        document.getElementById('result').textContent = result;
    })
    .catch(error => {
        console.log(error);
        document.getElementById('result').textContent = error;
    });