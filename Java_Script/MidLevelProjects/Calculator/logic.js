let lDicon = document.getElementById("icon");
let cal = document.getElementById("cal");
function changeBg(){
    if(icon.classList.contains("light")){
        cal.style.backgroundColor = "black"
        
        icon.classList.add("dark");
        icon.classList.remove("light");
        
    }
    else{
        cal.style.backgroundColor = "white"
        icon.classList.add("light");
        icon.classList.remove("dark");
    }
}