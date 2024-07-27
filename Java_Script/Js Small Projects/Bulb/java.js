var blb = document.querySelector("#bulb");
var btn = document.querySelector("button");
var flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    blb.style.backgroundColor = "yellow";
    flag = 1;
    btn.innerHTML = "OFF";
  } else {
    blb.style.backgroundColor = "white";
    flag = 0;
    btn.innerHTML = "ON";
  }
});
