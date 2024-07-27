var a = document.querySelector("h1");
a.innerHTML = "THIS IS  ROHIT";
a.style.color = "green";
a.style.backgroundColor = "yellow";
a.style.fontSize = "100px";
a.addEventListener("click", function () {
  a.innerHTML = "THIS IS NOT ROHIT, A DEVIL!!!";
  a.style.color = "red";
  a.style.backgroundColor = "black";
  a.style.fontSize = "200px";
});
console.log(a);
