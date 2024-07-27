// document
//   .getElementsByClassName("btns")[0]
//   .addEventListener("click", function () {
//     alert("You are redirected to google.com");
//     window.location = "https://www.google.com";
//   });
// document
//   .getElementsByClassName("btns")[1]
//   .addEventListener("click", function () {
//     alert("You presses second button");
//   });
// document
//   .getElementsByClassName("btns")[2]
//   .addEventListener("click", function () {
//     alert("You presses third button");
//   });
// document
//   .getElementsByClassName("btns")[3]
//   .addEventListener("click", function () {
//     alert("You presses fourth button");
//   });
// document
//   .getElementsByClassName("btns")[4]
//   .addEventListener("click", function () {
//     alert("You presses fifth button");
//   });
setInterval(function () {
  document.getElementById("bulb").classList.toggle("on");
}, 100);
