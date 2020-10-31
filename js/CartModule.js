export default class CartModule {
    constructor() {
        // load cart
        this.cart = [];
        if (localStorage.getItem("cart")) {
            this.cart = JSON.parse(localStorage.getItem("cart"));
        }
    }

    addItemToCart(product, quantity) {
        // check if the product already exists
        let productIndex = this.cart.findIndex((item) => {
            return item.id === product.id;
        });
        if (productIndex !== -1) {
            // exists
            this.cart[productIndex].quantity += quantity;
        } else {
            product.quantity = quantity;
            this.cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(this.cart));
    }

    getAllItemsCount() {
        return this.cart.reduce((totalCount, item) => totalCount + item.quantity, 0);
    }

    getCartItems() {
        return this.cart;
    }

    getTotalPrice() {
        let total = 0;
        this.cart.forEach((item) => {
            total += item.quantity * parseFloat(item.price.replace('$', ''));
        });
//tofixed
        return total;
    }
    removeFromCart(id){
       const checkedId = this.cart.findIndex((item)=>{
            return item.id == id;
       })

       if (checkedId !== -1) {
           //exist
           this.cart.splice(checkedId, 1);
           localStorage.setItem("cart", JSON.stringify(this.cart));
           return true;
       } else {
           return false;
       }
      
    }
}