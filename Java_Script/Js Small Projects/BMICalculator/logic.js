const form = document.querySelector("form");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    let h = parseInt(document.querySelector("#height").value);
    let w = parseInt(document.querySelector("#weight").value);
    var bmi = (w/(h*h/(10000))).toFixed(2);
    document.querySelector("#ans").innerHTML = ` <span> your BMI is: ${bmi} </span>`;
});
