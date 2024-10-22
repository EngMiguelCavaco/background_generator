var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * 
		(maxFloored - minCeiled + 1) + minCeiled); 
	// The maximum is inclusive and the minimum is inclusive
}

function rgbToHex(r, g, b) {
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

function getColor(){
	cRed = getRandomIntInclusive(0,255);
	console.log(cRed);
	cGreen = getRandomIntInclusive(0,255);
	cBlue = getRandomIntInclusive(0,255);
	color = rgbToHex(cRed, cGreen, cBlue);
	return color;
}

function generateRandomColors() {
	color1.value = getColor();
	color2.value = getColor();
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

var button = document.createElement("button");
button.textContent = "Set Random Colors!";
body.appendChild(button);

button.addEventListener("click", generateRandomColors);
