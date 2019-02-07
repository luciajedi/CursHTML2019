const WIDTH = 400;
const HEIGHT = 300;
let ctx;
let balls = new Array();

class Ball{
	constructor(initialx, initialy, radius, colour, incrx, incry){
		this.x = initialx;
		this.y = initialy;
		this.radius = radius;
		this.colour = colour;
		this.dx = incrx;
		this.dy = incry;	 
	}

	calculateNextPosition(){

		if(this.x + this.radius + this.dx >WIDTH || this.x - this.radius + this.dx < 0 ){
			this.dx = -this.dx;
		}
		if(this.y + this.radius + this.dy >HEIGHT || this.y - this.radius + this.dy < 0){
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;
	}


}

function init(){
	const cv = document.getElementById('dibuix');
	ctx = cv.getContext("2d");

	balls.push(new Ball (20, 20, 20, "aquamarine", 3, 2));
	balls.push(new Ball (40, 25, 20, "rgba(10, 150, 150, .2)", 2, 4));
	
	setInterval(update, 10);
}

function drawBall(x, y, radius, color="black"){
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI * 2, true);
	ctx.fillStyle = color;
	ctx.fill();
}

function clear(){
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function update(){
	clear();
	balls.forEach(ball => {
		ball.calculateNextPosition();
	drawBall(ball.x, ball.y, ball.radius, ball.colour);
	});	
}

window.onload = init;