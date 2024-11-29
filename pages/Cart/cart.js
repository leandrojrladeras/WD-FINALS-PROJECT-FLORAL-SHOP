document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cart-items');

    function renderCartItems() {
        cartItemsContainer.innerHTML = '';  // Clear existing items
        cartItems.forEach(item => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('list-group-item', 'd-flex', 'align-items-center');

            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.bouquet}" class="img-fluid" style="max-width: 100px; margin-right: 10px;">
                <div>
                    <h5>${item.bouquet}</h5>
                    <p>₱${item.price}</p>
                </div>
            `;

            cartItemsContainer.appendChild(cartItemDiv);
        });
    }

    renderCartItems();

    window.clearCart = function() {
        localStorage.removeItem('cartItems');
        cartItems.length = 0;
        renderCartItems();
    };
});