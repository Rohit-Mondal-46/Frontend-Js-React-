class Complex{
    constructor(r,i){
        this.real=r;
        this.imaginary=i;
    }
    print(){
        console.log(`${this.real} + i${this.imaginary}`);
    }
    add(b){
        this.real = a.real + b.real;
        this.imaginary = a.imaginary + b.imaginary;
    }
}
let a = new Complex(3,5);
let b = new Complex(4,8);
a.add(b);
a.print();