let angle1 = 0;
let angle2 = 0;
let size = 400;
let colors = [
  '#FB8B24',
  '#FC686F',
  '#4F759B',
  '#D0E562',
  '#80DDAC'
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  frameRate(15);
  // noLoop();
}

function draw() {

  noFill();
  stroke(120);
  strokeWeight(5);
  ellipse(width/2, height/2, size, size);

  strokeWeight(1);
  randomConnect();
}

function randomConnect(){
  angle1 = random(0, 2*PI);
  angle2 = angle1 + random(-2*PI/3, 2*PI/3);

  let index = int(random(0,4));

  stroke(colors[index]);

  let x1 = width/2 + size*sin(angle1)/2;
  let y1 = height/2 + size*cos(angle1)/2;

  let x2 = width/2 + size*sin(angle2)/2;
  let y2 = height/2 + size*cos(angle2)/2;

  let cx = ((x1 + x2)/2 + width/2)/2;
  let cy = ((y1 + y2)/2 + height/2)/2;

  bezier(x1,y1,cx,cy,x2,y2, x2, y2);

  fill(0,0,0,5);
  noStroke();
  rect(0,0,width, height);
}
