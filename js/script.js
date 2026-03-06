// Shopping Cart Functionality

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`${item.name} added to cart`);
    }

    removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName);
        console.log(`${itemName} removed from cart`);
    }

    viewCart() {
        console.log('Shopping Cart:');
        this.items.forEach(item => console.log(`- ${item.name}: $${item.price}`));
    }

    totalPrice() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

// Usage
const cart = new ShoppingCart();
cart.addItem({name: 'Apple', price: 0.99});
cart.addItem({name: 'Banana', price: 0.79});
cart.viewCart();
console.log(`Total: $${cart.totalPrice()}`);