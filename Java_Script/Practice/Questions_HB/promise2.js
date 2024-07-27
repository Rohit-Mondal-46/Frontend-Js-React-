//sabse pahle ghar par aao
//gate kholo aur gate lgao
//khana pakao aur khao
//thora js practice kro 
//aur last me soo jao


let ans = new Promise((resolve,reject)=>{
    return resolve("sabse pahle ghar par aao");

})

let ans2 = ans.then((msg)=>{
    console.log(msg);
    return new Promise((resolve,reject)=>{
        return resolve("gate kholo aur gate lgao");
    });
})

let ans3 = ans2.then((msg)=>{
    console.log(msg);
    return new Promise((resolve,reject)=>{
        return resolve("khana pakao aur khao");
    });
})
let ans4 = ans3.then((msg)=>{
    console.log(msg);
    return new Promise((resolve,reject)=>{
        return resolve("thora js practice kro");
    });
})
let ans5 = ans4.then((msg)=>{
    console.log(msg);
    return new Promise((resolve,reject)=>{
        return resolve("aur last me soo jao");
    });
})


ans5.then((msg)=>{
    console.log(msg);
})
