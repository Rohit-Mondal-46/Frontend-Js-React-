var main = document.querySelector("#main");
var crsr = document.querySelector("#cursor");
main.addEventListener("mousemove", function (direct) {
  //   console.log(dets.x);
  crsr.style.left = direct.x + "px";
  crsr.style.top = direct.y + "px";
  crsr.style.transition = "all linear 0.2s";
});
