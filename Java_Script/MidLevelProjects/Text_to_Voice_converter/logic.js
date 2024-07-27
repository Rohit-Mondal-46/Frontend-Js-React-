let speech = new SpeechSynthesisUtterance();
let btn = document.querySelector("#submit-btn");
let voices = [];
let selectedVoice = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voices,i) => (selectedVoice.options[i] = new Option(voices.name,i)))

};

selectedVoice.addEventListener("change",()=>{
    speech.voice = voices[selectedVoice.value];
})


btn.addEventListener("click",function(){
    let text = document.querySelector("textarea").value;
    speech.text = text;
    window.speechSynthesis.speak(speech)
    
})
