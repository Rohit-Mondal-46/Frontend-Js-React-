//invert the chars of a string given as input.

function invert(str){
    let eachChar = str.split("");
    let inverterChar = eachChar.map((c)=>{
        if(c.charCodeAt()>90){
            //all the char is small
            return c.toUpperCase();
        }else{
            //all the char is capital;
            return c.toLowerCase();
        }
    });
    let invertedAnsStr = inverterChar.join("");
    return invertedAnsStr;
}

let ans = invert("huI HUi");
console.log(ans);