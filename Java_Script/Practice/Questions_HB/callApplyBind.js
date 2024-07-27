//js me by default "this keyword" ki value window hoti ha, but with the help of "CALL", humlog this li value set krr skte ha.

let obj = {
    name : "rohit",
}

function abcd(a,c,d,e){
    console.log(this,a,c,d,e);//by default Window
}

// abcd()//this ki value window

abcd.call(obj,2,5,3,1);//the object itself, koi bhi value set krr skte ha instead of sirf yhi object



function bcad(a,c,d,e){
    console.log(this,a,c,d,e);
}

bcad.apply(obj,[3,2,4,7])//same as bind, bas arguments hum array ke form me de skte ha...instead of call ki tarah coma lga krr



function casad(a,c,d,e){
    console.log(this,a,c,d,e);
}
let func = casad.bind(obj,3,34,4,7)//same as bind but ye function ko chalata nhi ha...we can store this in a variable aur baad me isse chala skte ha.
func()