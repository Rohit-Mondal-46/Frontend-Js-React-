(function(){})();//iife - is a function expression which is immdiately called as it is created;

//why do we make iffe - to create private variables

// console.log("hello1");

// (function(){
//     console.log("hello2");
//     var a = 12;
//     console.log(a);
//     a = 13;
//     console.log(a);
// })();
// console.log(a);//cann't accesible here, so now how to access it???


//to access it 

let ans = (function(){
    let a = 46;
    return {//we are returing a obj which contains two methods, getter for getting the value and setter to set the value of variable. Now we can access or change the value of the variable inside iife.
        getter : function(){
            console.log(a);
        },

        setter : function(val){
            a = val;
        }
    }
})();

ans.getter();
ans.setter(47);
ans.getter();