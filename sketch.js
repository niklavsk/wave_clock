let clock;
let clock2;

let x1;
let y1;
let angle1 = 0;
let angle2 = 0;
let strokeCol1 = 50;
let strokeCol2 = 100;
let strokeCol3 = 150;
let strokeChange = -1;



function setup(){
createCanvas(800,600);
background(143,212,190);

}

function draw(){

x1 = width/2;
y1 = height/2;

clock = new Clocks(x1, y1);
clock2 = new Clocks(100,100);
clock.display();
clock2.display();

}



class Clocks {

constructor(x,y){
this.x = x;
this.y = y;
}

display(){


let scalar = random(200);


let x2 = width/2+scalar*cos(angle1);
let y2 = height/2+scalar*sin(angle2);

strokeCol1 += strokeChange;
strokeCol2 += strokeChange;
strokeCol3 += strokeChange;

if (strokeCol1>254){
strokeChange = -1;
}
if (strokeCol1<0){
strokeChange = 1;
}

if (strokeCol2>254){
strokeChange = -1;
}
if (strokeCol2<0){
strokeChange = 1;
}

if (strokeCol3>254){
strokeChange = -1;
}
if (strokeCol3<0){
strokeChange = 1;
}


strokeWeight(1);
stroke(strokeCol1,strokeCol2,strokeCol3);
line(this.x, this.y,x2,y2);

angle1++;
angle2++;

}

}