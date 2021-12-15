let c = document.getElementById("carrot");
let chop = document.getElementById("carrot_chopped");
var cut = document.getElementById("chop");
var cutIsPlaying = false;

c.addEventListener("click", myFunction)
function myFunction(){
    console.log("chop");
    let chop = document.getElementById("carrot_chopped");
    let c = document.getElementById("carrot");
    chop.style.display = "block";
    c.style.display = "none";
}

chop.addEventListener("click", myFunction1)
function myFunction1(){
    console.log("no chop");
    let chop = document.getElementById("carrot_chopped");
    let c = document.getElementById("carrot");
    chop.style.display = "none";
    c.style.display + "block";
}

c.addEventListener("click", myFunction2)
function myFunction2(){
	console.log("click")
	if (cutIsPlaying){
		console.log("play")
		cutIsPlaying = false;
		cut.pause();
			} else {
				cutIsPlaying = true;
				cut.play();
			}
		}