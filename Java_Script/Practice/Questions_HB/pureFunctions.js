//1. aisa koi bhi function joki global variable ki value ko change na kre

//2. function me har bar same parameter ki same value dene se output bhi hamesha same hi aye, mtlb harr baar koi naya output na aye same value dene parr

//pure funtion

let global =13;

function add(a){
    console.log(a+10);
}

//eg let a = 10, then harr baar console me value 20 hi print hogi for a=10 ke liye aur ye global variable ko effect bhi nhi krr rha ha


//impure function

function num(a){
    global++;
    console.log(Math.random()*a);

}

num(23);
num(23);
num(23);

console.log(global);

//eg let a = 23, then harr baar console me value different print hogi for a=23 ke liye aur ye global variable ko change bhi krr rha ha.
