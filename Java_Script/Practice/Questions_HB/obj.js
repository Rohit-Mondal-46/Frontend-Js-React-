//remove a particular property from js objects

let obj = {
    name : "rohit",
    tall : true,
}
// obj.name = " rohita "
// console.log(obj);
// delete obj.name; //delete the property
// console.log(obj);


//how to make obj immutable;
Object.freeze(obj);//makes the given obj immutable or unchangeable and we also can not delete any property inside the object;

obj.name = "rohitama";
delete obj.name;


console.log(obj);