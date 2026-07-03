"use strict";
// OOP - Object oriented programming
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = exports.LoginPage = void 0;
/*

1) class
2) constructor and this keyword
3) encapsulation
4) inheritance
5) polymorphism
6) abstraction
7) Access modifiers
8) Static



*/
class LoginPage {
    constructor(userName, password) {
        this.user = userName;
        this.pass = password;
    }
    userName() {
        console.log(this.user);
    }
    password() {
        console.log(this.pass);
    }
    userLogin() {
        this.userName();
        this.password();
        console.log("click on login button");
        console.log("user logged in successfully");
    }
}
exports.LoginPage = LoginPage;
class HomePage {
}
exports.HomePage = HomePage;
const login = new LoginPage('Admin', 12345);
login.userLogin();
//# sourceMappingURL=fileOne.js.map