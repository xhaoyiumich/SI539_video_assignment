var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
video=document.querySelector("#player1")
console.log("item1.clicked")
video.autoplay = false;
console.log("item2.clicked")
video.loop=false;
console.log("item3.clicked")
});

let vid = document.getElementById("player1");

document.getElementById("play").addEventListener("click",function()
{
    vid.play();
	let display = document.getElementById("volume");
	display.textContent = vid.volume * 100 + "%";
} )

document.getElementById("pause").addEventListener("click",function() {
    vid.pause();
})

document.getElementById("slower").addEventListener("click",function() {
    video.playbackRate -= 0.1;
})

document.getElementById("faster").addEventListener("click",function() {
	video.playbackRate += 0.1;
})

// document.getElementById("skip").addEventListener("click",function() {
//     vid.pause();
// })

document.getElementById("slider").addEventListener("input",function(){
	let input = this.value;
	console.log("userinput get"+ input);
	vid.volume = input/100 ;
	let display = document.getElementById("volume");
	display.textContent = input + "%";

}
)

document.getElementById("vintage").addEventListener("click",function() {
	vid.classList.add("oldSchool");

})

document.getElementById("orig").addEventListener("click",function() {
	vid.classList.remove("oldSchool");

})






// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

