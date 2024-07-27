// let obj = {
//     username : "guestUser",
//     price : 1001,
//     welcomeMessage : function(){
//         console.log(`${this.username}, Welcome to our website`)
//     }
// }
// obj.welcomeMessage();

// let normal = function(){
//     let user = "rohit"

//     console.log(this.user)
    
// }
// normal()
// let arrow = ()=>{
//     let user = "rohit"
//     console.log(this.user)
// }
// arrow();


//Another way to use Arrow Function
// let arr1 = (a,b)=> (a+b);
// console.log(arr1(3,8))


let arr2 = ()=> ({rohit:"hello",
    help : false
});
console.log(arr2())
console.log(arr2())