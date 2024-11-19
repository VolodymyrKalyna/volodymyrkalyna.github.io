const jsonUrl = "https://volodymyrkalyna.github.io/pr9.json";

fetch(jsonUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Не вдалося завантажити дані");
        }
        return response.json();
    })
    .then(data => {
        renderProducts(data.products);
    })
    .catch(error => {
        console.error("Помилка завантаження:", error);
    });

function renderProducts(products) {
    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("block");

        productCard.innerHTML = `
            <p class="category"><a href="#">${product.category}</a></p>
            <div class="line"></div>
            <a href="#">
                <img src="${product.image}" alt="${product.name}" width="150px" height="200px">
            </a>
            <p class="name"><a href="#">${product.name}</a></p>
            <p class="price">${product.price} грн</p>
            <button class="buy-btn" onclick="addToCart('${product.name}', ${product.price})">У корзину</button>
        `;

        productContainer.appendChild(productCard);
    });
}

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
updateCartCount();

function addToCart(name, price) {
    document.getElementById("quantityModal").style.display = "flex";
    window.selectedItem = { name, price };
}

function addItemToCart() {
    const quantity = document.getElementById("quantity").value;
    if (quantity > 0) {
        const item = { ...window.selectedItem, quantity: parseInt(quantity) };
        cartItems.push(item);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        updateCartCount();
        document.getElementById("quantityModal").style.display = "none";
        document.getElementById("addedModal").style.display = "flex";
        document.getElementById("quantity").value = "1";
    } else {
        alert("Вкажіть коректну кількість товару");
    }
}

function updateCartCount() {
    const itemCount = cartItems.length;
    document.getElementById("cartCount").textContent = itemCount;
}

function closeAddedModal() {
    document.getElementById("addedModal").style.display = "none";
}

function goToCart() {
    window.location.href = "cart.html";
}

function checkCart() {
    if (cartItems.length === 0) {
        document.getElementById("emptyCartModal").style.display = "flex";
    } else {
        window.location.href = "cart.html";
    }
}

function closeModal() {
    document.getElementById("emptyCartModal").style.display = "none";
}
