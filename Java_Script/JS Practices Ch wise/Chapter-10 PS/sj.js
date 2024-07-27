let a = prompt("Enter Your Note here");
localStorage.setItem("Note",a);
let x = confirm("do you want to show the note right now?");
if(x){
    let c=localStorage.getItem("Note");
    alert(c);
}
let y = confirm("do you want to delete the note?");
if(x){
    localStorage.removeItem("Note");
    alert("Hurray!!! Note deleted successfully");
}