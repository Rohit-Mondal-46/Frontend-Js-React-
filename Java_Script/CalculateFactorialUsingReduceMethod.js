const prompt = require("prompt-sync")();
let num = prompt("Enter a number to calculate its factorial = ");
let arr = [];
for (let i = 1; i <= num; i++) {
  arr.push(i);
}
let ans = arr.reduce((num1, num2) => {
  return num1 * num2;
});
console.log(ans);
