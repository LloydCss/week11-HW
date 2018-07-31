var bubbles = [];
var bool
var slider
var speed
function setup() {
	bool = true;

	slider = createSlider(0,255, 5);
	createCanvas(800,800);
	
	for(var i=0; i<10; i++) {
		bubbles.push(new Bubble(random(width),random(height),
			random(255), random(255), random(255)));
	}
	var button = select('#button');
	button.mousePressed(Stop)
	
}

function draw() {
	background('BLACK');
	tint(slider.value(),100,100);
	for(var i = 0; i<10; i++) {
		if(bool == true){
		bubbles[i].move();
}
		bubbles[i].show();
	}

}


function Bubble(x, y, red, green, blue) {
	this.x = x;
	this.y = y;
	this.red = red;
	this.green = green;
	this.blue = blue;

	this.show = function() {
		
		
		fill(this.red,this.green,this.blue);
		rect(this.x, this.y, 50, 50);
	}

	this.move = function() {
		this.x += random(-3,3);
		this.y += random(-3,3);

	}
}
	function Stop(){
		if(bool == false) {
		bool = true;
	} else {
		bool = false;
	}

	
	
	}
	
