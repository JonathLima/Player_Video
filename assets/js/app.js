let video = document.querySelector('.video');
let juice = document.querySelector('.orange-juice');
let btn = document.getElementById('play-pause');
let btnFull = document.getElementById('fullscreen');
let btnFor = document.getElementById('forward');
let btnBack = document.getElementById('backward');


function tooglePlayPause(){
    if(video.paused){
        btn.className = 'pause';
        video.play();
    }
    else{
        btn.className = 'play';
        video.pause();
    }
}

btn.onclick = function(){
    tooglePlayPause();
}

video.addEventListener('timeupdate', function(){
    let juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if(video.ended){
        btn.className = 'play';
    }
})

btnFull.onclick = function(){
    video.requestFullscreen();
}

btnFor.onclick = function(){
    video.playbackRate += 0.1;
}

btnBack.onclick = function(){
    video.playbackRate -= 0.1;
}