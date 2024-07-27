const prompt = require("prompt-sync")();
let arr = [46, 47, 48, 49];
let ele = prompt("please enter a value");
let a = parseInt(ele);
arr.push(a);
console.log(arr);
