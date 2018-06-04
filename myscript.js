var bgColor = ["rgb(32,96,255)","rgb(215,48,39)", "rgb(252,141,89)", "rgb(254,224,144)", "rgb(224,243,248)", "rgb(145,191,219)","rgb(69,117,180)" ]

var items = document.querySelectorAll('.item')
var c;


function start() {
	setInterval(swapColor,200)
}

function swapColor() {
	for(var x = 0; x < items.length; x++){
		c = bgColor[Math.floor(Math.random()*bgColor.length)];
	items[x].style.background = c;
}
}


