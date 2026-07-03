"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogin = void 0;
class UserLogin {
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
}
exports.UserLogin = UserLogin;
//# sourceMappingURL=inheritOne.js.map