





abstract class AbstractClass {


    print() {
        console.log('playwright')
    }



}



// const a = new AbstractClass()

// a.print()


class Two extends AbstractClass {


    func() {
        this.print()
    }



}


const b = new Two()

b.func()