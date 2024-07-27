let nameError = document.getElementById("name-error")
let phoneError = document.getElementById("phone-error")
let emailError = document.getElementById("email-error")
let textError = document.getElementById("text-error")
let submitError = document.getElementById("submit-error")


function validateName(){
    let name = document.getElementById("name-field").value;
    if(name.length == 0){
        nameError.style.color = "red"
        nameError.innerHTML = "name is required";
        return false;
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        nameError.style.color = "red"
        nameError.innerHTML = "full name is required";
        return false;
    }
    nameError.style.color = "green"
    nameError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`
    return true;
    
}
function validatePhone(){
    let phone = document.getElementById("phone-field").value;
    if(phone.length == 0){
        phoneError.style.color = "red"
        phoneError.innerHTML = "phone is required";
        return false;
    }
    if(phone.match(/^[1-9]\d{2}\s\d{3}\s\d{4}/)){
        phoneError.style.color = "red"
        phoneError.innerHTML = "must be a digits";
        return false;

    }
    if(phone.length != 10){
        phoneError.style.color = "red"
        phoneError.innerHTML = "must be 10 digits";
        return false;
    }
    phoneError.style.color = "green"
    phoneError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`
    return true;
    
}
function validateEmail(){
    let email = document.getElementById("email-field").value;
    if(email.lenght == 0){
        emailError.style.color = "red"
        emailError.innerHTML = "email required";
        return false;
    }
    if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
        emailError.style.color = "red"
        emailError.innerHTML = "not a valid email";
        return false;
    }
    emailError.style.color = "green"
    emailError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`
    return true;
}
function validateText(){
    let text = document.getElementById("text-field").value;
    let reqWord = 10;
    if(text.length == 0){
        textError.style.color = "red"
        textError.innerHTML = "info required";
        return false;
    }
    if(text.length<reqWord){
        textError.style.color = "red"
        textError.innerHTML = `${reqWord - text.length} more characters required"`;
        return false;
    }
    textError.style.color = "green"
    textError.innerHTML = `<i class="fa-regular fa-circle-check"></i>`
    return true;
}
function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateText()){
        submitError.style.color = "red"
        submitError.innerHTML = "inputs field can not be empty";
        setTimeout(function(){
            submitError.innerHTML = "";
        },3000);
        return false;
    }
}
