let lists = document.getElementsByClassName("lists");
let rightBox = document.getElementById("cont2");
let leftBox = document.getElementById("cont1");
let seleted = null;



for(let i of lists){
    i.addEventListener("dragstart",function(e){
        seleted = e.target;
    })
}
    rightBox.addEventListener("dragover",function(e){
        e.preventDefault();
    })
    rightBox.addEventListener("drop",function(e){
        rightBox.appendChild(seleted);
        seleted = null;
    })


    leftBox.addEventListener("dragover",function(e){
        e.preventDefault();
    })
    leftBox.addEventListener("drop",function(e){
        leftBox.appendChild(seleted);
        seleted = null;
    })
