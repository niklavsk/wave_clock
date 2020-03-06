let clock, clock2, clock3, clock4, clock5, clock6, clock7, clock8, clock9;
let strokeCol1;
let x1;
let y1;
let angle1 = 0;
let angle2 = 0;


let strokeChange = -1;


function setup(){
	createCanvas(800,600);
	background(143,212,190);
}

function draw(){

	x1 = width/2;
	y1 = height/2;
	strokeCol1 = 50;


	clock = new Clocks(100, 100, 80, strokeCol1, 50, 50);
	clock2 = new Clocks(300, 100, random(70,80), strokeCol1, 70, 50);
	clock3 = new Clocks(500, 100, 80, random(150,200), random(150,200), random(150,200));

	clock4 = new Clocks(100, 300, 80, strokeCol1, 50, 50);
	clock5 = new Clocks(300, 300, 80, strokeCol1, 50, 50);
	clock6 = new Clocks(500, 300, 80, strokeCol1, 50, 50);

	clock7 = new Clocks(100, 500, 80, strokeCol1, 50, 50);
	clock8 = new Clocks(300, 500, 80, strokeCol1, 50, 50);
	clock9 = new Clocks(500, 500, 80, strokeCol1, 50, 50);

	clock.display();
	clock2.display();
	clock3.display();
	clock4.display();
	clock5.display();
	clock6.display();
	clock7.display();
	clock8.display();
	clock9.display();

}



class Clocks {

	constructor(x, y, scalar, col1, col2, col3){
		this.x = x;
		this.y = y;
		this.scalar = scalar;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
	}

	display(){
		let x2 = this.x + this.scalar*cos(angle1);
		let y2 = this.y + this.scalar*sin(angle2);

		this.col1 += strokeChange;
		this.col2 += strokeChange;
		this.col3 += strokeChange;

		if (this.col1 > 254){
		strokeChange = -1;
		}
		if (this.col1 < 0){
		strokeChange = 1;
		}


		if (this.scalar > 100){
			this.scalar += -1;
		}
		if (this.scalar < 100){
			this.scalar += -1;
		}

		strokeWeight(1);
		stroke(this.col1, this.col2, this.col3);

		line(this.x, this.y, x2, y2);

		angle1++;
		angle2++;

	}
}