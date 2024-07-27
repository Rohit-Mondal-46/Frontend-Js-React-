// let div = document.createElement("div");
// div.id = "r1";
// div.className = "rohit";
// div.innerHTML = "Hi This Is Rohit";
// document.body.append(div);
// let dive = document.getElementById(r1);
// let h1 = document.createElement("h1");
// h1.id = "101";
// h1.innerHTML = "ROHIT MONDAL";
// r1.before(h1);

//*****************SetTimeout***************

// let a = setTimeout(function () {
//   alert("hello");
// }, 1000);
// clearTimeout(a);

// *****************setInterval*****************

// const fun = function (x, y) {
//   console.log(x + y);
// };
// let a = prompt("enter a number: ");
// let b = prompt("enter a number: ");
// let c = setInterval(fun, 2000, a, b);
// clearInterval(c);

// *****************BrowserEvents*****************

// second.keyDown = function (e) {
//   alert("clicked!!!");
//   console.log(e);
// };
let a = document.getElementById("second");
a.addEventListener("click", function () {
  r1.hidden = false;
});
