function get(a,len=1){
    let clonned = []
    for (let index = 0; index < len; index++) {
        clonned.push(a[index])
    }
    return clonned;
}
let arr = [1,2,3,4,5,6,7];
let length = 5;
console.log(get(arr,length));