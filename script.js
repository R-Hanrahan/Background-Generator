var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient();

function randomRgb() {
	function getRandomRgb() {
		var num = Math.round(0xffffff * Math.random());
		var r = num >> 16;
		var g = num >> 8 & 255;
		var b = num & 255;
		return  'rgb(' + r + ', ' + g + ', ' + b + ')';
	}
	body.style.background = 
	"linear-gradient(to right, " 
	+ getRandomRgb()
	+ ", " 
	+ getRandomRgb() 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", randomRgb)
