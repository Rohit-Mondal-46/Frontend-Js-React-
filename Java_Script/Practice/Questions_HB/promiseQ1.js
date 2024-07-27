const prompt = require('prompt-sync')();
//user will ask for a number, if the number is below 5 then resolve if not then reject.

function prm(a){
    let num = new Promise(function(resolve,reject){
        if(a<5){
            return resolve("below 5");
        }
        else{
            return reject("above 5");
        }
    });
    return num;
}

let a = prompt("Enter a number: ");
prm(a).then(function(msg){
    console.log(msg);
}).catch(function(msg){
    console.log(msg);
})


