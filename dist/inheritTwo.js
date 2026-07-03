"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inheritOne_1 = require("./inheritOne");
class ValidateLogin extends inheritOne_1.UserLogin {
    constructor(userName, password) {
        super(userName, password);
    }
    validateUserLogin() {
        this.userName();
        this.password();
        console.log("validate user login");
    }
}
const validate = new ValidateLogin('Admin', 12345);
validate.validateUserLogin();
//# sourceMappingURL=inheritTwo.js.map