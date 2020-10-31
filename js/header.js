import CartModule from './CartModule.js';

$(document).ready(function () {
  const cartModule = new CartModule();
  const $header = $('header');

  let loggedUser = null;
  if (localStorage.getItem("loggedUser")) {
    loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  }

  const userHtml = loggedUser ?
    `<li class="nav-item"> 
            <a class="nav-link btn-danger btn"> Welcome ${loggedUser.username} </a>
        </li>
        `
    :
    `<li class="nav-item">  
            <a class="nav-link" href="login.html">Login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link  btn btn-danger" href="signup.html">sign up</a>
        </li>`;

  const cartHtml = loggedUser ?
    `<div class="my-2 my-lg-0">
      <a href="cart.html" class="cartShop"> 
        <span><i class="fas fa-shopping-cart"></i></span>
        <span id="cartCount">${cartModule.getAllItemsCount()}</span>
      </a>
      </div>` : '';

  $header.html(
    `<div class="container">
    
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
            <a class="navbar-brand" href="#"><img src="images/logo.png"></a>
    
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
    
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
              <ul class="navbar-nav m-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="aboutUs.html">About Us </a>
                </li>
                <li class="nav-item">  
                  <a class="nav-link" href="gallary.html">Gallary</a>
                </li>
                <li class="nav-item">  
                <a class="nav-link" href="contactUs.html">Contact Us</a>
              </li>
                ${userHtml}
              </ul>
    
              ${cartHtml}
          </nav>
        </div>
    
        `
  );
});