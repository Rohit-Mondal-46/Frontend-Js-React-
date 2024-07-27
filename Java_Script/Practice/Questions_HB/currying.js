// function add(a,b){
//     console.log(a);
// }

// add(46,45);


//jab bhi humare paas ek function hoga jismein ek se jyada parameters aa rhe hoo, to hum usse "Simplify" krr dete ha, uss function ko hum kai saare function ki series mein todd dete ha, aur harr function return krrega ek naya function joki puraane functions ke parameter ko use krega


//currying concept of above eg

function add1(a){
    return function add2(b){
        return a+b;
    }
}


let ans1 = add1(46);
let ans2 = ans1(45); 

console.log(ans1);