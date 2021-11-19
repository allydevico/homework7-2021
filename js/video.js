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
	console.log("Speed Slowed Down to " + video.playbackRate);
	video.play();
 });

 document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate + 0.05;
	console.log("Speed Up to " + video.playbackRate);
	video.play();
 });

 document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	if (video.currentTime < video.duration - 15){
		video.currentTime += 15;	
	}
	else{
		video.currentTime = 0;
	}
	console.log("Current video time is: " + video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		console.log("Unmuted Button Clicked");
		video.muted = false;;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else{
		console.log("Muted Button Clicked");
		video.muted=true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("Volume is: " + this.value);
	video.volume = this.value/100;
	document.getElementById("volume").innerHTML=this.value+"%"
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add('oldSchool');
	console.log("Video Style Set To 'Old School'")
})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
	console.log("Video Style Set To 'Original'")
});

