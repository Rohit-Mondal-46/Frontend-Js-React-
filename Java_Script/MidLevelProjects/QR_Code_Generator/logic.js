let img = document.getElementById("generatedQr");
let inp = document.getElementById("datefield");
let btn = document.getElementById("btn");
let apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

btn.addEventListener("click",function(){
    if(inp.value === ""){
        alert("Please Enter Some text or url!!!")
    }
    else{
        let data = inp.value;
        let dataUrl = apiUrl + data;
        inp.value = ""
        generateQr(dataUrl);
    }
})
function generateQr(url){
    img.src = url;
}