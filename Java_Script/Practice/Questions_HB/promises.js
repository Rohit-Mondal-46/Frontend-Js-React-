//future me hone wala task, halanki wo pura ho ya na ho.usse hum then catch se handle krrte ha

let futureMeJoCmpltHoga = new Promise((resolve,reject)=>{
    if(true){ 
        return resolve(" mondal");
    }
    else{
        return reject(" not mondal");
    }
});

futureMeJoCmpltHoga.then((msg)=>{
    console.log("rohit"+msg);
}).catch((msg)=>{
    console.log("not rohit"+msg);

})
