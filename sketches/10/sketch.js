let angle = 0;
let size = 20;
let space = 30;
let h = 70; // height of the wave
let frequency = 2; // frequency adjuster
let length = 500; // length of the spiral

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30);

  angle = angle + frequency;

  push();
  translate((width-length)/2, height/2);

  for(i=0;i< length;i=i+space){

    let radian = radians(angle+i);

    stroke(150);
    strokeWeight(2);
    noFill();
    line(i,h*sin(radian),i,h*cos(radian));

    fill(30);
    ellipse(i,h*sin(radian),size,size);
    ellipse(i,h*cos(radian),size,size);
  }
  pop();
}
