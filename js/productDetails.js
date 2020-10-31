import UserModule from './UserModule.js';
import CartModule from './CartModule.js';

$(document).ready(function () {
  const userModule = new UserModule();
  const cartModule = new CartModule();
  let product = null;

  // get id
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  if (!productId) {
    alert("Product id is invalid");
    return;
  }

  $.ajax({
    url: "../data/bestProduct.json",
    success: render
  })
  const details = document.getElementById("details");

  function render(response) {
    product = response.find((item) => {
      return item.id == productId;
    });

    if (product) {
      // render
      details.innerHTML = `<div class=" proDetails">
       <div class="row">
         <div class="col-md-4">
           <!-- The four columns -->
           <div class="row">
             <div class="container">                   
                 <img id="expandedImg"  src="${product.img}" style="width:100%">
                 <div id="imgtext"></div>
               </div>
               <div class="productImages">
                  <div class="column">
                     <img src="${product.imgDetail1}"  style="width:100%" onclick="myFunction(this);">
                   </div>
                   <div class="column">
                     <img src="${product.imgDetail2}"  style="width:100%" onclick="myFunction(this);">
                   </div>
                   <div class="column">
                     <img src="${product.imgDetail3}"  style="width:100%" onclick="myFunction(this);">
                   </div>
                   <div class="column">
                     <img src="${product.imgDetail4}"  style="width:100%" onclick="myFunction(this);">
                   </div>
               </div>
         
           </div>
          
     </div>
     <div class="col-md-8">
       <div class="textDetails">
         <h1>${product.name}</h1>
         <div class="manufacturing-info">
           <span class="manufacturer">${product.productName}</span>
          
           <p class="d-block">
             <span class="stock-unit-name">Product Number </span>
             :
             <span class="stock-unit-no">${product.productNum}</span>
           </p>
         </div>
         <div class="product-cost">
         <div class="pdt-detail-cost">
           <span class="price">${product.price}</span>
         </div>
         <div class="product-cost-strick">
           <span class="price">${product.dashedPrice}</span>
         </div>
         <div class="product-discount">
           <span class="discount-badge">Discount  ${product.discount} </span>
         </div>
         </div>
         <div class="config-list">
           <p>Color : </p>
           <button class="btn">${product.color} </button>
         </div>
         <div class="config-list">
           <p> Memory : </p> 
           <button class="btn">${product.memory}</button>
         </div>

         <div class="prod-quantity">
           <p> Quantity : </p>
           <button class="btn" id="dec"> - </button>
           <span class="quan-number" id="qunNum"> ${product.quantity} </span>
           <button class="btn" id="inc"> + </button>
         </div>  
         <div class="addToCart">
           <button class="btn" id="addToCart"> Add To Cart</button>
           <span class="favIcon"><i class="far fa-heart"></i></span>
         </div>
       </div>
     </div>
   </div>  
 </div>`

      $("#inc").on("click", function () {
        let $number = $("#qunNum").html();
        $number++;
        $("#qunNum").html($number)
      });

      $("#dec").on("click", function () {
        let $number = $("#qunNum").html();
        if ($number <= 1) {
          $("#dec").off("click", "**");
        }
        else {
          $number--;
          $("#qunNum").html($number)
        }
      });

      ///////////AddToCart////////////////////////////////////////////////////////////
      $("#addToCart").on("click", function () {
        if (!userModule.loggedUser) {
          alert("Please login first");
        } else {
          const quantity = parseInt($("#qunNum").text());
          cartModule.addItemToCart(product, quantity);
        }

        $('#cartCount').html(cartModule.getAllItemsCount());
      });
    } else {
      alert("Product is not found");
    }

  }


});