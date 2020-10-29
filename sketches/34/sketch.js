let factor = 2;
let num = 100;
let d = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
}

function draw() {
  background(0,0,5);

  factor = factor + 0.01;
  let color = map(sin(factor),-1,1,0,100);

  translate(width / 2, height / 2);
  noFill();

  strokeWeight(1);
  for(let i = 0; i < num; i++){
    let a = getVec(i, num); // start v
    let b = getVec(i*factor, num); // end v

    let length = dist(a.x, a.y, b.x, b.y);
    let bright = map(length, 0, d, 100, 30);

    stroke(color, 80, bright);
    line (a.x, a.y, b.x, b.y);
  }

  strokeWeight(3);
  stroke(color, 100, 100);
  ellipse(0, 0, d);
}

function getVec(i,num){
  const a = map(i % num, 0, num, 0, TWO_PI);
  // start from -PI
  let v = p5.Vector.fromAngle(a - PI);
  v.mult(d/2);
  return v
}
