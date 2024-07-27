let key = prompt("Enter your key");
let value = prompt("Enter your value");
document.cookie=`"${encodeURIComponent(key)}=${value}"`;
console.log(document.cookie);