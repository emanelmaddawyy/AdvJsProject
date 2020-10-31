export default class UserModule {
    constructor() {
        if (localStorage.getItem("loggedUser")) {
            this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
        }
    }

    setLoggedUser(user) {
        localStorage.setItem("loggedUser", JSON.stringify(user));    
        this.loggedUser = user;
    }
}