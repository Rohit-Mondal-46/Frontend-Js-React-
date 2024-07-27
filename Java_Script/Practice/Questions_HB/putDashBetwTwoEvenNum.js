let num = 246137124;
let numStr = num.toString();
let numStrLen = numStr.length;
let ansStr = "";
for(let i = 0 ;i<numStrLen-1;i++){
    let num1 = parseInt(numStr[i]);
    let num2 = parseInt(numStr[i+1]);

    if(num1%2 == 0 && num2%2 == 0){
        let lastIdx = ansStr.length-1;
        if(ansStr[lastIdx]!=num1){
            ansStr+=num1;
        }
        ansStr+="-";
        ansStr+=num2;
    }else{
        ansStr+=num2;
    }
}

console.log(ansStr);