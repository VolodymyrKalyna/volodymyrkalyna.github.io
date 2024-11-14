let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function displayCartItems() {
    const cartTableBody = document.getElementById('cartTableBody');
    const totalAmountElement = document.getElementById('totalAmount');
    cartTableBody.innerHTML = '';

    let totalAmount = 0;

    if (cartItems.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 6;
        cell.textContent = "Корзина пуста";
        row.appendChild(cell);
        cartTableBody.appendChild(row);
        totalAmountElement.textContent = '0 грн';
        return;
    }

    cartItems.forEach((item, index) => {
        const row = document.createElement('tr');

        const numCell = document.createElement('td');
        numCell.textContent = index + 1;
        row.appendChild(numCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = item.price + ' грн';
        row.appendChild(priceCell);

        const quantityCell = document.createElement('td');
        const changeQuantityBtn = document.createElement('span');
        changeQuantityBtn.textContent = "(змінити к-сть)";
        changeQuantityBtn.classList.add('change-quantity-btn');
        changeQuantityBtn.onclick = () => editQuantity(index);
        
        const quantityText = document.createElement('span');
        quantityText.textContent = item.quantity;
        quantityCell.appendChild(quantityText);
        quantityCell.appendChild(changeQuantityBtn);
        row.appendChild(quantityCell);

        const sumCell = document.createElement('td');
        const itemSum = item.price * item.quantity;
        sumCell.textContent = itemSum + ' грн';
        row.appendChild(sumCell);

        const actionsCell = document.createElement('td');
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = "(видалити)";
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => removeItemFromCart(index);
        actionsCell.appendChild(deleteBtn);
        row.appendChild(actionsCell);

        cartTableBody.appendChild(row);

        totalAmount += itemSum;
    });

    totalAmountElement.textContent = totalAmount + ' грн';
}

function removeItemFromCart(index) {
    cartItems.splice(index, 1);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    displayCartItems();
}

function editQuantity(index) {
    const row = document.getElementById('cartTableBody').rows[index];
    const quantityCell = row.cells[3];

    const currentQuantity = cartItems[index].quantity;
    const input = document.createElement('input');
    input.type = 'number';
    input.value = currentQuantity;
    input.classList.add('quantity-input');
    quantityCell.innerHTML = '';

    quantityCell.appendChild(input);

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            updateQuantity();
        }
    });
    
    input.addEventListener('blur', () => {
        updateQuantity();
    });
    
    
    function updateQuantity() {
        const newQuantity = parseInt(input.value);
    
        if (isNaN(newQuantity) || newQuantity <= 0) {
            displayCartItems();
            alert("Введіть коректну кількість!");
            input.value = currentQuantity;
        } else {
            cartItems[index].quantity = newQuantity;
    
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
            displayCartItems();
        }
    }
}



displayCartItems();
