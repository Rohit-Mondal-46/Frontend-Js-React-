let cont = document.getElementById("container");
let inp = document.getElementById("inp");
let btn = document.getElementById("btn");
let data = document.getElementById("data");


btn.addEventListener("click",calculate);
function calculate(){
    data.innerHTML = ""
    let dob = new Date(inp.value);//birth date
    //Seperating Value
    let d1 = dob.getDate();
    let m1 = dob.getMonth() + 1;
    let y1 = dob.getFullYear();
    
    
    let todayDate = new Date(); //today's date;
    //Seperating Value
    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth() + 1;
    let y2 = todayDate.getFullYear();

    let d3,m3,y3;//differences

    y3 = y2-y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2-d1;
    }
    else{
        m3--;
        let days = getsDayInAMonth(y2,m2,0); 
        d3 = days + d2 - d1;
    }
    if(m3<0){
        m3 = 11;
        y3--;
    }
    function getsDayInAMonth(yr,mon){
        return new Date(yr,mon,0).getDate();
    }
    console.log(d3,m3,y3);
    displayAge(d3,m3,y3);
}

function displayAge(d3,m3,y3){
    let h3 = document.createElement("H3");
    h3.innerHTML = `You are ${y3} year, ${m3} months and ${d3} days old`;
    data.appendChild(h3);
}