class Complex{
    constructor(r,i){
        this.real=r;
        this.imaginary=i;
    }
    print(){
        console.log(`${this.real} + i${this.imaginary}`);
    }
}
let a = new Complex(3,5);
a.print();