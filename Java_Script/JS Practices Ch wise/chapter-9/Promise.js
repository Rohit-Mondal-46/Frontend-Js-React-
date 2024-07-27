let p1 = new Promise(function (resolve, reject) {
  resolve(true);
});
let p2 = new Promise(function (resolve, reject) {
  reject(new Error("Got some error!!!"));
});
p1.then(console.log);
setTimeout(function () {
  p2.catch(console.log);
}, 3000);
