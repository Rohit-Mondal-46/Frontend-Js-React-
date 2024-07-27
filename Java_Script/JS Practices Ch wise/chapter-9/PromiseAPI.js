let p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("1");
    reject("Access Denied");
  }, 1000);
});
let p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve("2");
    reject("Access Denied");
  }, 2000);
});
let p3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("3");
  }, 3000);
});
let p4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("3");
  }, 4000);
});
let p5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("5");
  }, 5000);
});

let rohit = Promise.any([p1, p2, p3, p4, p5]);
rohit.then((value) => {
  console.log(value);
});

// **********************************************

let p1 = Promise.reject(50);
p1.catch((value) => {
  console.log("sorry");
});