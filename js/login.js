import UserModule from './UserModule.js';

$(document).ready(function(){
    const $Form = $('#loginForm');
    console.log($Form)
    $Form.on("submit",function (e) {
        e.preventDefault();
        const formdata = new FormData($Form[0]);

        let registeredUsers = [];
        if (localStorage.getItem("registeredUsers")) {
            registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
        }

        const loggedUser = registeredUsers.find((item) => {
            return item.email === formdata.get("loginMail") && item.password === formdata.get("loginPass");
        });

        if (loggedUser) {
            const userModule = new UserModule();
            userModule.setLoggedUser(loggedUser);
            window.location="index.html";
        } else {
            alert("Invalid Email or Password")
        }
    });
});