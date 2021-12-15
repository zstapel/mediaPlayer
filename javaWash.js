let tap = document.getElementById("sink_sound");
let water = document.getElementById("wateron");
var s = document.getElementById("sink");
var sinkIsOn = false;
let p1 = document.getElementById("plate1");
let p2 = document.getElementById("plate2");
let p = document.getElementById("plant");
let n = document.getElementById("nature");
var plantIsPlaying = false;
let o = document.getElementById("noise");
var noiseIsPlaying = false;
let y = document.getElementById("soapy");
var a = document.getElementById("soap");
var washIsDoing = false;
let p3 = document.getElementById("plate3");
var broke = new Audio('sounds/break.mp3');

p3.addEventListener("click", myFunction8)
function myFunction8(){
	document.getElementById("plate3").style.display = "none";
	broke.play();
}
y.addEventListener("click", myFunction7)
function myFunction7(){
    if (washIsDoing){
        washIsDoing = false;
        a.pause();
    }else{
        washIsDoing = true;
        a.play();
    }
}

p1.addEventListener("click", myFunction2)
function myFunction2(){
    // document.getElementsById("plate1").style.display = "none";
    if (noiseIsPlaying){
        noiseIsPlaying = false;
        o.pause();
    }else {
        noiseIsPlaying = true;
        o.play();
    }
    }
    p2.addEventListener("click", myFunction3)
    function myFunction3(){
        // document.getElementsById("plate2").style.display = "none";
        if (noiseIsPlaying){
            noiseIsPlaying = false;
            o.pause();
        }else {
            noiseIsPlaying = true;
            o.play();
        }
        }

p.addEventListener("click", myFunction5)
function myFunction5(){
    console.log("click2")
	if (plantIsPlaying){
		console.log("play")
		plantIsPlaying = false;
		n.pause();
			} else {
				plantIsPlaying = true;
				n.play();
			}
}

tap.addEventListener("click", myFunction6)
function myFunction6(){
        document.getElementById("wateron").style.display = "block";
}

tap.addEventListener("click", myFunction1)
function myFunction1(){
	console.log("click2")
	if (sinkIsOn){
		console.log("play")
		sinkIsOn = false;
		s.pause();
			} else {
				sinkIsOn = true;
				s.play();
			}
		}




