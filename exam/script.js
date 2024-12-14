function setActive(event) {
    const links = document.querySelectorAll("a");
    links.forEach(link => link.classList.remove("active"));

    event.target.classList.add("active");

    const activeLinkText = document.getElementById("active-link-text");
    activeLinkText.textContent = event.target.textContent;
}