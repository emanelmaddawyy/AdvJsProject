import CartModule from "./CartModule.js";
 $(document).ready(function(){
     const cartModule = new CartModule();
    const cartItem = cartModule.getCartItems();
    var cart = document.getElementById("cart");
    const totalPrice = document.getElementById("total")
   const mappedCart = cartItem.map((item)=>{
        return `<div class="col-lg-3 col-md-6 col-sm-12 mt-4 cart-item">
        <div class="ProductItem">
            <div class="card">
              <p class="discount ">
                <span class="float-right">${item.discount}</span>
              </p>
              <img class="card-img-top" src="${item.img}">
              <div class="card-body">
                <h5 class="productname">${item.productName}</h5>
                <h5 class="productBrand">${item.name}</h5>
                <div class="price">
                  <p class="realPrice ">${item.price}</p>
                  <p class="realPrice">${item.quantity} Item</p>
                  <a href="productDetails.html?id=${item.id}" class="btn btn-info">
                  Read More 
                  </a>
                  <span class="btn btn-danger btn-remove" data-id="${item.id}"><i class="fa fa-trash-alt"></i></span>
                </div>
              </div>
            </div>
        </div>
      </div> `
    })
    cart.innerHTML=mappedCart.join("\n")
    totalPrice.innerHTML = cartModule.getTotalPrice();

    $('#cart').on('click', '.btn-remove', function(e) {
        const $btn = $(e.currentTarget);
        const $cartItem = $btn.closest('.cart-item');
        const id = $btn.data('id');

        const deleteResult = cartModule.removeFromCart(id);
        if (deleteResult) {
            $cartItem.remove();
            totalPrice.innerHTML = cartModule.getTotalPrice();
            $('#cartCount').html(cartModule.getAllItemsCount());
        } else {
            alert('Some error happened');
        }
    });
 
 })

