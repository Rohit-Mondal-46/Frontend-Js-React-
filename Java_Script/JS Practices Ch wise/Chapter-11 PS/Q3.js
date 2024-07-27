class Human{
    constructor(name,age,height){
        this.name=name;
        this.age=age;
        this.height=height;
    }
    canWalkOut(){
        console.log(this.name + " You Have Time, You Can Walk")
    }
}
class Student extends Human{
    canWalkOut(time){
        if (time>10){
            console.log(this.name + " Have Time,Can Walk")
        }else{
            console.log(this.name + " dont Have Time,Can not Walk")
        }
    }
}
let st = new Student("hero",17,170);
st.canWalkOut(10);