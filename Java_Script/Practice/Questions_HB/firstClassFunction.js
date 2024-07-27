//F.C.F aise function hote ha jinko aap variable ki value ki tarah treat krr skte ha...

function xyz(val){
    val();
}

xyz(function(){
    console.log("hii mai xyz function ke nadar hun aur val me store hoke val jab invoke ho rha ha, tab chal rha hun")
});