let promise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("under promise declaration");
        resolve("go to then");
    }, 1000);
})

promise1.then(function(arg){//arg - the value passed by resolved
    console.log(arg);
})