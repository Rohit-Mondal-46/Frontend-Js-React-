let arr = ["a","b","d","r","b","r","c","c","a","c","r","c"]
let obj ={};
let cntFreq = (c)=>{
    let char = c;
    // console.log(typeof char)
    if(!obj.hasOwnProperty(char)){
        //setting the property
        obj[char]= 1;
    }
    else{
        //updating the freq of the element
        obj[char]+= 1;
    }
}
arr.forEach(cntFreq);
// console.log(obj);
for(let i in obj){
    console.log(`count of ${i} is ${obj[i]}`);
}