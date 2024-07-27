const prompt = require("prompt-sync")();
let arr = [20, 30, 21, 31, 40, 50, 41, 51];
let ans = arr.filter(isDivisibleByTen);
function isDivisibleByTen(ele) {
  if (ele % 10 == 0) {
    return ele;
  }
}
console.log(arr);
console.log(ans);
