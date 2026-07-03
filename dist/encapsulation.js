"use strict";
// private - access function only inside the class. can't access outside the class
class HomePage {
    validateHeader() {
        console.log("validate header");
    }
    validateFooter() {
        console.log("validate footer");
    }
    validate() {
        this.validateHeader();
        console.log("validate home page");
    }
}
const home = new HomePage();
home.validate();
//# sourceMappingURL=encapsulation.js.map