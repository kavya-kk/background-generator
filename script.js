var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

var h3 = document.querySelector("h3");

var bodyEle = document.getElementById("body");

function setGradient(){
	bodyEle.style.background = "linear-gradient(to right," + color1.value +","+ color2.value +")";
	h3.textContent = bodyEle.style.background;
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function convertToHex(dec){
	var hex = dec.toString(16);
	return hex.length == 1? "0"+hex : hex;
}

function randGenerator() {
	var dec = Math.floor( Math.random()*255);
	return convertToHex(dec);
}

function getColor () {
	return "#"+randGenerator()+randGenerator()+randGenerator();
}

function setRandomBackground() {

	color1.value = getColor();
	color2.value = getColor();
	setGradient();
}

var randomButton = document.querySelector("button");
randomButton.addEventListener("click",setRandomBackground);