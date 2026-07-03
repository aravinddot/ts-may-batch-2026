








export class UserLogin {

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



}