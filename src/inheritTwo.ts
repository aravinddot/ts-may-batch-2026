import { UserLogin } from "./inheritOne";






class ValidateLogin extends UserLogin {

    constructor(userName: string, password: number) {
        super(userName, password)
    }

    validateUserLogin() {
        this.userName()
        this.password()
        console.log("validate user login")

    }

}



const validate = new ValidateLogin('Admin', 12345)

validate.validateUserLogin()