var st = document.querySelector("#strg");
var btn = document.querySelector("#frnd");
var flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    st.innerHTML = "Friends";
    btn.innerHTML = "Remove";
    st.style.color = "green";
    flag = 1;
  } else {
    st.innerHTML = "Stranger";
    st.style.color = "red";
    btn.innerHTML = "Add Friend";
    flag = 0;
  }
});
