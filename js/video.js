const controls = document.querySelector(".controls");
const playstop = document.querySelector(".stop-play");
const video = document.querySelector(".video-back");
const videoSrc = document.querySelectorAll(".video-back-src");
const audio = document.querySelector(".audio-back");
const audioSrc = document.querySelectorAll(".audio-back-src");
function playAndStop(){
    if (video.paused){
        video.play(); 
        audio.play();
        playstop.style.backgroundImage = "url('img/pause.png')";
    }
    else{
        video.pause();
        audio.pause();
        playstop.style.backgroundImage = "url('img/play.png')";
    }
}
function videoRandom(){
    const rand = Math.floor((Math.random() * 4) + 1);
    videoSrc[0].src = "video/Relax"+rand+".mp4";
    videoSrc[1].src = "video/Relax"+rand+".ogv";
    videoSrc[2].src = "video/Relax"+rand+".webm";
    audioSrc[0].src = "audio/Relax"+rand+".ogg";
    audioSrc[1].src = "audio/Relax"+rand+".mp3";
    video.load();
    audio.load();
}
video.playbackRate = 0.7;
video.addEventListener("click", playAndStop);
controls.addEventListener("click", playAndStop);
document.addEventListener("DOMContentLoaded", videoRandom);