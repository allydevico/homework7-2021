var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window. Current speed: " + video.playbackRate)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
 });

 document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate - 0.05;
	console.log("Speed Slowed Down to" + video.playbackRate);
	video.play();
 });

 document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.05;
	console.log("Speed Up to" + video.playbackRate);
	video.play();
 });
