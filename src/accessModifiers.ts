




class AccessModify {

    private valueOne: string // inside class only
    protected valueTwo: string // inside class + child class
    readonly valueThree: string // can't modify


    constructor() {
        this.valueOne = "playwright"
        this.valueTwo = "cypress"
        this.valueThree = "selenium"
    }




    loginFunc() {
        //this.valueThree = "night watch"
        console.log(this.valueOne)
    }





}



class AccessModifyTwo extends AccessModify {


    func() {
        console.log(this.valueThree)
    }



}