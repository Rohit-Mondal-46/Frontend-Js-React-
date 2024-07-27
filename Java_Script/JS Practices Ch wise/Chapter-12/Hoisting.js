//first two lines works,(concept of hoisting),also works for functions and classes
//but (let and const) can't be hoisted and similarly function expression also not hoisted

console.log(a);
h();
var a;
function h(){
    console.log("hello")
}

