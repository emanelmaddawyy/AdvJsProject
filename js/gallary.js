$.ajax({
    url: "../data/bestProduct.json",
    success: function (respons) {
      loop(respons);
    }
  })
  var gallary = document.getElementById("gallary");
  
  function loop(respons) {
    var rows = respons.map(function (item) {
      return `<div class="col-lg-3 col-md-6 col-sm-12 mt-4">
            <div class="ProductItem">
                <div class="card">
                  <p class="discount "><span class="float-right">${item.discount}</span></p>
                  <img class="card-img-top" src="${item.img}">
                  <div class="card-body">
                    <h5 class="productname">${item.productName}</h5>
                    <h5 class="productBrand">${item.name}</h5>
                    <div class="price">
                      <p class="realPrice ">${item.price}</p>
                      <p class="dashedPrice ">${item.dashedPrice}</p>
                      <a href="productDetails.html?id=${item.id}" class="btn btn-danger">
                      Read More 
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          </div> `
    });

    gallary.innerHTML = rows.join("\n")
  }