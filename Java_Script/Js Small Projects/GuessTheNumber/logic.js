let num = document.querySelector("#guessedNum");
let button = document.querySelector("#button");
let arr = document.querySelector("#guessList");
let remain = document.querySelector("#remain");
let ans = document.querySelector("#lowOrHigh");
let p = document.createElement("p");
let cont = document.querySelector(".container");


let attempts = 0;
let rem = 3;
remain.innerHTML = `Remaining Guesses: ${rem}`

let playGame = true;
if (playGame) {
    button.addEventListener("click", function (dets) {
        attempts += 1;
        dets.preventDefault();
        const guess = parseInt(num.value);
        arr.innerHTML += `${guess} `
        rem-=1;
        remain.innerHTML = `Remaining Guesses: ${rem}`
        num.value = ''
        if (attempts < 3) {
            if (validateGuess(guess)) {
                let msg = "";
                if (checkGuess(guess)) {
                    msg = "Hurray,You Guessed it Right"
                }
                else {
                    msg = "Sorry, better try, keep it up"
                }
                displayMessage(msg);
            }
            else {
                alert("Please, Enter A valid Number")
            }
        }
        else {
            endGame();
        }

    })
}

//Validating
function validateGuess(guess) {
    if (guess >= 1 && guess <= 100) {
        return true;
    }
    else {
        return false;
    }
}

//checking the guessed number
function checkGuess(guess) {
    let g = parseInt(Math.random() * 100);
    if (g == guess) {
        return true;
    }
    else {
        return false;
    }
}

//display whether user was right or wrong
function displayMessage(msg) {
    ans.innerHTML = `<h2>${msg}</h2>`
}


//end the game if 10 attempts comlpeted
function endGame() {
    num.value = "";
    num.setAttribute('disabled','')
    p.classList.add("button");
    p.innerHTML = `<h2 id="newG">Start New Game</h2>`
    cont.appendChild(p);
    playGame=false;
    newGame();
}

//start a new game
function newGame() {
    but = document.querySelector("#newG");
    but.addEventListener("click",function(dets){
        playGame = true;
        attempts=0;
        rem = 3;
        num.removeAttribute('disabled','')
        cont.removeChild(p);
        arr.innerHTML = "Previous Guesses: "
        ans.innerHTML = ""
        remain.innerHTML = `Remaining Guesses: ${rem}`

    })
}
