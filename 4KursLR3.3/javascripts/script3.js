function outputToPage(message) {
    let outputDiv = document.getElementById("output");
    let p = document.createElement("p");
    p.textContent = message;
    outputDiv.appendChild(p);
}

let comics = {
    name: "V for Vendetta",
    author: "Алан Мур",
    application: "DC Comics",
    year: 1989,
    inCollection: true,
    comicsInfo() {
        outputToPage(`Назва: ${this.name}, Автор: ${this.author}, Видавництво: ${this.application}, Рік видання: ${this.year}, В колекції: ${this.inCollection ? "Так" : "Ні"}`);
    },
    markAsInCollection() {
        this.inCollection = false;
        outputToPage(`Комікс "${this.name}" забрано з колекції.`);
    },
    isOlderThan30Years() {
        let currentYear = new Date().getFullYear();
        return (currentYear - this.year) > 30;
    }
}

outputToPage("Цей комікс старший ніж 30 років? " + (comics.isOlderThan30Years() ? "Так" : "Ні"));
comics.comicsInfo();
comics.markAsInCollection();
comics.comicsInfo();

let library = [
    { name: "Maus", author: "Арт Шпігельман", application: "Pantheon Books", year: 1991, inCollection: true },
    { name: "Watchmen", author: "Алан Мур", application: "DC Comics", year: 1987, inCollection: false },
    { name: "Persepolis", author: "Маржан Сатрапі", application: "L'Association", year: 2000, inCollection: true }
];

function addComicsToLibrary(){
    while(true)
    {

    let name = prompt("Введіть назву коміксу:");

    if(name == null)
    break;

    if (!isNaN(name))
    continue;

    let author = prompt("Введіть автора коміксу:");

    if(author == null)
    break;

    if (!isNaN(author))
    continue;

    let application = prompt("Введіть видавництво коміксу:");

    if(application == null)
    break;

    if (!isNaN(application))
    continue;

    let year = prompt("Введіть рік видання коміксу:");

    if(year == null)
    break;

    year = Number(year)

    if (isNaN(year))
    continue;

    if (isNaN(year) || !Number.isInteger(year)) {
        alert("Введіть ціле число");
        continue;
    }

    let inCollection = confirm("Чи є комікс в колекції");

    library.push({ name, author, application, year, inCollection });
    displayLibrary();

    break;
    

    

    }
}

addComicsToLibrary()

function isOlderThan30Years(comics) {
    let currentYear = new Date().getFullYear();
    return (currentYear - comics.year) > 30;
}

library.forEach(comics => {
    let age = isOlderThan30Years(comics) ? "старший 30 років" : "молодший 30 років";
    outputToPage(`Назва: ${comics.name}, Рік: ${comics.year}, Статус: ${age}`);
});

function displayLibrary() {
    library.forEach(comics => {
        outputToPage(`Назва: ${comics.name}, Автор: ${comics.author}, Видавництво: ${comics.application}, Рік видання: ${comics.year}, В колекції: ${comics.inCollection ? "Так" : "Ні"}`);
    });
}

library.push({ name: "The Sandman", author: "Ніл Ґейман", application: "Vertigo", year: 1996, isRead: false });
displayLibrary();

library.sort((a, b) => a.name.localeCompare(b.name));
outputToPage("Відсортовані комікси за назвою:");
displayLibrary();

library.sort((a, b) => a.year - b.year);
outputToPage("Відсортовані комікси за роком видання:");
displayLibrary();

let comicsInCollection = library.filter(comics => comics.inCollection);
outputToPage("Комікси, які в даний момент є в колекції:");
comicsInCollection.forEach(comics => outputToPage(`Назва: ${comics.name}`));

let alanMoorComics = library.find(comics => comics.author === "Алан Мур");
outputToPage("Комікс Алан Мур: " + alanMoorComics.name);



function calculateAverageYear() {
    if (library.length === 0) return 0;
    
    let totalYears = library.reduce((sum, comics) => sum + comics.year, 0);
    
    let averageYear = totalYears / library.length;
    
    return averageYear;
}

let averageYear = calculateAverageYear();
outputToPage(`Середній рік видання коміксів: ${averageYear}`);

