let k = 9;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
}

function draw() {
  fill(100,200,250);
  background(30,30,30,50);
  noStroke();

  translate(width/2, height/2);
  rotate(angle);

  for(i=0;i<k;i=i+2){
    let r = 60*cos((angle+i)*k);
    let x = r*cos(angle+i);
    let y = r*sin(angle+i);

    ellipse(x,y,10,10);
  }

  angle = angle + 1/150;
}
