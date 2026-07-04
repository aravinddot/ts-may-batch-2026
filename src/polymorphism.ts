



class LoginNewPage {


    navigateTo() {
        console.log('Navigate to login page')
    }

}



class SignUpNewPage extends LoginNewPage{


    navigateTo() {
        console.log('Navigate to signup page')
    }

}


const signup = new SignUpNewPage()


signup.navigateTo()


const loginnewpage = new LoginNewPage()

loginnewpage.navigateTo()

