function addToCart(itemName, itemPrice) {
    const cartItem = { name: itemName, price: itemPrice };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    local