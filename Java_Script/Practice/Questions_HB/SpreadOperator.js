let arr=[1,2,3,4,5];
let arr1 = arr //reference of the arr,i.e; if we
               //remove an element from arr1, it also reflect in arr.
//to make a copy of that arr we have to sue SPREAD operator.
let arr2 = [...arr];//copy,if we pop from arr2 it will not affect the arr.