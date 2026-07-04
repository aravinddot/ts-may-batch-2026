"use strict";
class LoginNewPage {
    navigateTo() {
        console.log('Navigate to login page');
    }
}
class SignUpNewPage extends LoginNewPage {
}
const signup = new SignUpNewPage();
signup.navigateTo();
//# sourceMappingURL=polymorphism.js.map