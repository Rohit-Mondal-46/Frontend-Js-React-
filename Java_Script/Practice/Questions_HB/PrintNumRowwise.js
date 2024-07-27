let a = [[1,2,3,4],[14,223,233,44],[21,52,36,44],[71,82,43,34],[12,52,37,42]];

let cnt = 1;
let printRow = (r)=>{
    let size = r.length;
    console.log(`Print Row ${cnt}`);
    for(let i = 0 ; i<size ; i++){
        console.log(r[i]);
    } 
    cnt++;
    console.log("\n");
}
a.forEach(printRow);