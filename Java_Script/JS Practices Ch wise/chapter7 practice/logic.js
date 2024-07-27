let ele1 = document.getElementById("ele1");
ele1.style.backgroundColor = "red";

var parent = document.getElementById("parent");
parent.firstElementChild.style.backgroundColor = "black";
parent.lastElementChild.style.backgroundColor = "black";

let li = document.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "cyan";
}
// li.style.backgroundColor = "cyan";
