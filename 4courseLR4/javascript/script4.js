let imagesArray = [
    {
        path: 'images/001.jpg',
        title: 'S21 ULTRA',
        description: 'Телефон від компанії SAMSUNG'
    },
    {
        path: 'images/002.jpg',
        title: 'Iphone 16',
        description: 'Телефон від компанії Apple'
    },
    {
        path: 'images/003.jpg',
        title: 'Huawei Nova',
        description: 'Телефон від компанії Huawei'
    }
];

let currentIndex = 0;




function initPhotoRotator() {

    const container = document.createElement('div');
    container.className = 'container';

    const leftBlock = document.createElement('div');
    leftBlock.className = 'left';
    const leftLink = document.createElement('a');
    leftLink.href = '#';
    leftLink.id = 'navigation-left';
    leftLink.onclick = showPrevious;
    leftLink.textContent = 'Назад';
    leftBlock.appendChild(leftLink);
    container.appendChild(leftBlock);

    const centerBlock = document.createElement('div');
    centerBlock.className = 'center';

    const topDiv = document.createElement('div');
    topDiv.className = 'top';
    topDiv.id = 'imageNumber';
    centerBlock.appendChild(topDiv);

    const middleDiv = document.createElement('div');
    middleDiv.className = 'middle';
    const img = document.createElement('img');
    img.id = 'image';
    img.src = '';
    img.alt = 'Фотографія';
    img.width = 900;
    img.height = 550;
    middleDiv.appendChild(img);
    centerBlock.appendChild(middleDiv);

    const bottomDiv = document.createElement('div');
    bottomDiv.className = 'bottom';
    centerBlock.appendChild(bottomDiv);

    container.appendChild(centerBlock);

    const rightBlock = document.createElement('div');
    rightBlock.className = 'right';
    const rightLink = document.createElement('a');
    rightLink.href = '#';
    rightLink.id = 'navigation-right';
    rightLink.onclick = showNext;
    rightLink.textContent = 'Вперед';
    rightBlock.appendChild(rightLink);
    container.appendChild(rightBlock);

    document.body.appendChild(container);
    
}

initPhotoRotator();

    const imageElement = document.getElementById('image');
    const imageNumberElement = document.getElementById('imageNumber');
    const Description = document.querySelector('.bottom');

    function updateDisplay() {
        imageElement.src = imagesArray[currentIndex].path;
        imageNumberElement.innerText = `Фотографія ${currentIndex + 1} з ${imagesArray.length}`;
        Description.innerText = imagesArray[currentIndex].title + ":\n " + imagesArray[currentIndex].description;
        updateNavigationVisibility();
    }

    function showPrevious(){
        if (currentIndex > 0) {
            currentIndex--;
            updateDisplay();
        }
    };
    
    function showNext(){
        if (currentIndex < imagesArray.length - 1) {
            currentIndex++;
            updateDisplay();
        }
    };


    function updateNavigationVisibility() {
        const navLeft = document.getElementById('navigation-left');
        const navRight = document.getElementById('navigation-right');

        navLeft.classList.toggle('inactive', currentIndex === 0);
        navRight.classList.toggle('inactive', currentIndex === imagesArray.length - 1);
    }

updateDisplay()

