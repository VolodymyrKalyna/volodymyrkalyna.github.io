let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
updateCartCount()

    function addToCart(name, price) {
        document.getElementById('quantityModal').style.display = 'flex';
        
        window.selectedItem = { name, price };
    }

    function addItemToCart() {
    
    const quantity = document.getElementById('quantity').value;
    if(quantity>0)
    {
    const item = { ...window.selectedItem, quantity: parseInt(quantity) };

    cartItems.push(item);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    updateCartCount();

    document.getElementById('quantityModal').style.display = 'none';

    document.getElementById('addedModal').style.display = 'flex';
    }
    else
    {
        alert("Вкажіть коректну кількість товару")
    }
    
}


    function updateCartCount() {
        const itemCount = cartItems.length;
        document.getElementById('cartCount').textContent = itemCount;
    }

    function closeAddedModal() {
        document.getElementById('addedModal').style.display = 'none';
    }

    function goToCart() {
        window.location.href = 'cart.html';
    }
    function checkCart() {
        if (cartItems.length === 0) {
            document.getElementById('emptyCartModal').style.display = 'flex';
        } else {
            window.location.href = 'cart.html';
        }
    }

    function closeModal() {
        document.getElementById('emptyCartModal').style.display = 'none';
    }