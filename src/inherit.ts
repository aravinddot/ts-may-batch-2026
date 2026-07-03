


// parent class
class productPage {



    pickTheProduct() {
        console.log("Product is picked")
    }

    checkoutTheCart() {
        console.log("checkout the cart")
    }


}


// child class
class CartPage extends productPage {



    validateCartCheckout() {
        this.pickTheProduct()
        this.checkoutTheCart()
        console.log("validate cart checkout")
    }



}