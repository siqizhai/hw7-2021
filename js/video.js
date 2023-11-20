var video = document.querySelector(".video");

window.addEventListener("load", function() {
 console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
 video.play();
 var volume = document.querySelector("#volume");
 volume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
 video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
 video.playbackRate *= .9;
 console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
 video.playbackRate /= .9;
 console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
 if (video.currentTime + 10 > video.duration) {
  video.currentTime = 0;
 }
 else {
  video.currentTime += 10;
 }
 console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
 if (video.muted) {
  video.muted = false;
  document.querySelector("#mute").innerHTML = "Mute";
 }
 else {
  video.muted = true;
  document.querySelector("#mute").innerHTML = "Unmute";
 }
});

document.querySelector("#slider").addEventListener("change", function() {
 video.volume = this.value / 100;
 var volume = document.querySelector("#volume");
 volume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
 video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
 video.classList.remove("oldSchool");
});
