let buttons = document.querySelectorAll(".button");
buttons.forEach(function(button){
    button.addEventListener("click",function(dets){
        if(dets.target.id === "grey"){
            document.body.style.backgroundColor=dets.target.id;
        }
        if(dets.target.id === "black"){
            document.body.style.backgroundColor=dets.target.id;
        }
        if(dets.target.id === "red"){
            document.body.style.backgroundColor=dets.target.id;
        }
        if(dets.target.id === "green"){
            document.body.style.backgroundColor=dets.target.id;
        }
    })
})