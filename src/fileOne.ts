
// OOP - Object oriented programming

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



export class LoginPage {

    user: string
    pass: number

    constructor(userName: string, password: number) {
        this.user = userName
        this.pass = password
    }
 

    userName() {
        console.log(this.user)
    }

    password() {
        console.log(this.pass)
    }


    userLogin() {
        this.userName()
        this.password()
        console.log("click on login button")
        console.log("user logged in successfully")
    }

}



export class HomePage {


}


const login = new LoginPage('Admin', 12345)


login.userLogin()



