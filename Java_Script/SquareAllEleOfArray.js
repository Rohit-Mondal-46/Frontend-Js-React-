const prompt = require("prompt-sync")();
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = arr.map(getSquare);
function getSquare(ele) {
  return ele * ele;
}
console.log(ans);
