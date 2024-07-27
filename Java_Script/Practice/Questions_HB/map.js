let b = [1,2,3,4,5,6,7];
//perform any operation on each element of the array and copy it to an another imaginary array, which we have to save in a variable, inside map we have to use return keyword

let c = b.map(function(val){
    return 2*val;
})
console.log(c);

let obj = [
    {
        name:"hello",
        age:19
    },
    {
        name:"jhello",
        age:23
    },
    {
        name:"ello",
        age:56
    },
    {
        name:"lelo",
        age:12
    }
]

let name = obj.map(function(val){
    return val.name;
})
let age = obj.map(function(val){
    return val.age;
})

console.log(name);
console.log(age);