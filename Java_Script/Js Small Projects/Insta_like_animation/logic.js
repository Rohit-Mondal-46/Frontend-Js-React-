var cont = document.querySelector("#container");
var icon = document.querySelector("#icon");
cont.addEventListener("dblclick", function () {
  icon.style.transform = "translate(-50%, -50%) scale(1)";
  icon.style.opacity = "1";
  icon.style.color = "red";
  setTimeout(function () {
    icon.style.transform = "translate(-50%, -50%) scale(0)";
    icon.style.opacity = "0";
  }, 900);
});
