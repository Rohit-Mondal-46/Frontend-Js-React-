let cards = document.querySelectorAll(".card");
let firstChild;
let secondChild;
let isFlipped = false
cards.forEach((card)=>{
    card.addEventListener("click",flipCard)
})
function flipCard(){
    // console.log(this.firstElementChild);
    this.firstElementChild.classList.add("flipped")
    if(!isFlipped){
        isFlipped = true;
        firstChild = this
    }
    else{
        secondChild = this
        check();
    }
}
function check(){
    setTimeout(() => {
        
        if(firstChild.dataset.image===secondChild.dataset.image){
            alert("Hurray You Won The Game")
        }
        else{
            alert("better luck next time")
        }
        reset();
    }, 500);

}
function reset(){
    isFlipped =false;
    firstChild.firstElementChild.classList.remove("flipped")
    secondChild.firstElementChild.classList.remove("flipped")
    firstChild=null;
    secondChild=null;
}