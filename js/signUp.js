$(document).ready(function(){
    const $Form = $('#signForm');
    console.log($Form)
    $Form.on("submit",function (e) {
        e.preventDefault();
        const formdata = new FormData($Form[0]);
        let registeredUsers = [];
        if (localStorage.getItem("registeredUsers")) {
            registeredUsers = JSON.parse(localStorage.getItem("registeredUsers"));
        }

        const newUser = {
            username: formdata.get("userName"),
            email: formdata.get("userMail"),
            password: formdata.get("userPass"),
            phone: formdata.get("phone")
        };

        const checkedUser = registeredUsers.find((item) => {
            return item.email === newUser.email;
        });

        if (checkedUser) {
            alert("You're already registered");
        } else {
            registeredUsers.push(newUser);
            localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
            window.location="login.html";
        }
    });
});