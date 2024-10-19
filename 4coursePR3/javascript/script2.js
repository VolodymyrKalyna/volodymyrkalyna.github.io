document.getElementById("extractEmails").addEventListener('click', function() {
    const textInput = document.getElementById("inputText").value;
    const emailList = extractEmails(textInput);
    displayEmails(emailList);
});

function extractEmails(text) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b/g;

    let foundEmails;
    const matchedEmails = text.match(emailRegex);
    if (matchedEmails !== null) {  
        foundEmails = matchedEmails;
    } else {
        foundEmails = [];
    }
    return foundEmails;
}

function displayEmails(emails) {
    const emailListElement = document.getElementById("emailList");
    emailListElement.innerHTML = "";

    if (emails.length > 0) {
        emails.forEach(email => {
            const li = document.createElement("li");
            li.textContent = email;
            emailListElement.appendChild(li);
        });
    } else {
        emailListElement.innerHTML = "<li>Жодної дійсної електронної адреси не знайдено</li>";
    }
}