let comics = {
    name: "V for Vendetta",
    author: "Алан Мур",
    application: "DC Comics",
    year: 1989,
    inCollection: true,
    comicsInfo(){
        console.log(`Назва: ${this.name}, Автор: ${this.author}, Видавництво: ${this.application},  Рік видання: ${this.year}, В колекції: ${this.inCollection ? "Так" : "Ні"}`)
    },
    markAsInCollection() {
        this.inCollection = false;
        console.log(`Комікс "${this.name}" забрано з колекції.`);
    },
    isOlderThan30Years() {
        let currentYear = new Date().getFullYear();
        return (currentYear - this.year) > 30;
    }
    
}

console.log("Цей комікс старший 30 років?", comics.isOlderThan30Years());

comics.comicsInfo()
comics.markAsInCollection()
comics.comicsInfo()

let library = [
    {name: "Maus", author: "Арт Шпігельман", application: "Pantheon Books", year: 1991, inCollection: true},
    {name: "Watchmen", author: "Алан Мур", application: "DC Comics", year: 1987, inCollection: false},
    {name: "Persepolis", author: "Маржан Сатрапі", application: "L'Association", year: 2000, inCollection: true}
]

function isOlderThan30Years(comics) {
    let currentYear = new Date().getFullYear();
    return (currentYear - comics.year) > 30;
}

library.forEach(comics => {
    let age = isOlderThan30Years(comics) ? "вінтажний" : "не вінтажний";
    console.log(`Назва: ${comics.name}, Рік: ${comics.year}, Статус: ${age}`);
});

function displayLibrary(){
    library.forEach(comics => {
        console.log(`Назва: ${comics.name}, Автор: ${comics.author}, Видавництво: ${comics.application}, Рік видання: ${comics.year}, В колекції: ${comics.inCollection ? "Так" : "Ні"}`)
    })
}

library.push({ name: "The Sandman", author: "Ніл Ґейман", application: "Vertigo", year: 1996, isRead: false});

displayLibrary()

library.sort((a,b) => a.name - b.name);
console.log("Відсортовані комікси за назвою:", library);

library.sort((a,b) => a.year - b.year);
console.log("Відсортовані комікси за роком видання:", library);

let comicsInCollection = library.filter(comics => comics.inCollection);
console.log("Комікси, які в данним момент є в колекції:", comicsInCollection);

let alanMoorComics = library.find(comics => comics.author === "Алан Мур");
console.log("Комікс Алан Мур:", alanMoorComics);


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

addComicsToLibrary();

function calculateAverageYear() {

    if (library.length === 0) return 0;
    
    let totalYears = library.reduce((sum, comics) => sum + comics.year, 0);
    
    let averageYear = totalYears / library.length;
    
    return averageYear;
}

let averageYear = calculateAverageYear();
console.log(`Середній рік видання коміксів: ${averageYear}`);
