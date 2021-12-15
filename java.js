let fri = document.getElementById("eggs");
var o = document.getElementById("open")
var openIsPlaying = false;
let w = document.getElementById("water");
var p = document.getElementById("pour")
var pourIsPlaying = false;

fri.addEventListener("click", myFunction)
function myFunction(){
	console.log("click")
	if (openIsPlaying){
		console.log("play")
		openIsPlaying = false;
		o.pause();
			} else {
				openIsPlaying = true;
				o.play();
			}
		}
	

w.addEventListener("click", myFunction1)
function myFunction1(){
	console.log("click")
	if (pourIsPlaying){
		console.log("play")
		pourIsPlaying = false;
		p.pause();
			} else {
				pourIsPlaying = true;
				p.play();
			}
		}
