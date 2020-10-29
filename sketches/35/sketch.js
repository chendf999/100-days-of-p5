let phase = 0;
let zoff = 0;
let angle = 0;
let m = 0;
let range = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  translate(width/2, height/2);

  blobby(cos(angle), sin(angle));

  angle = angle + 0.001;
}

function blobby(x,y){
  push();
  translate(x, y);
  noFill();

  if(range > 40){

  let max = 2;
  beginShape();
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, max);
    let yoff = map(sin(a + phase), -1, 1, 0, max);
    let r = map(noise(xoff, yoff, zoff), 0, 1, range/2, range);

    let alpha = map(r, 0, 150, 150, 0);
    stroke(255, alpha);
    curveVertex(2*r * cos(a), 2*r * sin(a));
  }
  endShape(CLOSE);

  phase = phase + 0.01;
  zoff = zoff + 0.02;

    range--;
  }

  pop();
}
  
