    let song = document.getElementById("song");
    let progress = document.getElementById("progress");
    let ctrlBtn = document.getElementById("play-btn");

    song.onloadedmetadata = function(){
        progress.max = song.duration;
        progress.value = song.currentTime;
    }

    function playPause(){
        if(ctrlBtn.classList.contains("fa-pause")){
            song.pause();
            ctrlBtn.classList.remove("fa-pause");
            ctrlBtn.classList.add("fa-play");
        }
        else{
            song.play();
            ctrlBtn.classList.add("fa-pause");
            ctrlBtn.classList.remove("fa-play");
        }
    }
    ctrlBtn.addEventListener("click",playPause);
    song.addEventListener("timeupdate", function(){
        progress.value = song.currentTime;
    });
    progress.onchange = function(){
        song.play();
        song.currentTime = progress.value;
        ctrlBtn.classList.add("fa-pause");
        ctrlBtn.classList.remove("fa-play");
    }