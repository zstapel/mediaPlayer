let pots = document.getElementById("pot");
let f = document.getElementById("fill");
let chopped = document.getElementById("carrot_chopped");
let boil = document.getElementById("carrots_boil");
var pour = document.getElementById("pour");
var pourIsPlaying = false;
let o = document.getElementById("ocean");
var s = document.getElementById("sea");
var oceanIsPlaying = false;

o.addEventListener("click", myFunction3)
function myFunction3(){
    if (oceanIsPlaying){
        oceanIsPlaying = false;
        s.pause();
    } else {
        oceanIsPlaying = true;
        s.play();
    }
}


pots.addEventListener("click", fillPot)
function fillPot(){
    document.getElementById("fill").style.display = "block";
}

chopped.addEventListener("click", myFunction4)
function myFunction4(){
    document.getElementById("carrot_chopped").style.display = "none";
    document.getElementById("carrots_boil").style.display = "block";
    // document.getElementById("video").style.display = "block";
}

pots.addEventListener("click", myFunction1)
function myFunction1(){
	console.log("click")
	if (pourIsPlaying){
		console.log("play")
		pourIsPlaying = false;
		pour.pause();
			} else {
				pourIsPlaying = true;
				pour.play();
			}
		}
