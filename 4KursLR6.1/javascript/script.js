function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5;
            if (isSuccess) {
                resolve("Дані завантажено успішно!");
            } else {
                reject("Сталася помилка при завантаженні.");
            }
        }, 2000);
    });
}

function loadData() {
    document.getElementById('loader').style.display = 'block';
    document.getElementById('result').textContent = '';

    fetchData()
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