let arr = [1,2,3,4,5,6,7,8,9];
let ans = arr.filter(function(val){
    return val < 7;
})
// console.log(ans);

let unsort = [34,23,12,56,1,5,9];
unsort.sort();
// console.log(unsort);

let name1 = ["amit", "ananya", "raghav", "vaishali","shreya", "anu"];
let name2 = name1.filter(function(val){
    return (val.split("a").length <= 2);
})
console.log(name2);