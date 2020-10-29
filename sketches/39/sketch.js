function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  // noLoop();
}

function draw() {
  stroke(255,10);
  noFill();

  translate(width/2, height/2);

  // for(i = 0; i< 5000; i++){

  let r = width/6;
  let a = randomGaussian(0,PI/4);
  let b = a + randomGaussian(0,PI/3);

  // generate two end points
  let va = createVector(r * cos(a), r * sin(a));
  let vb = createVector(r * cos(b), r * sin(b));
  generatePath(va,vb);

  // }
}

function generatePath(va,vb){
  let mid = p5.Vector.add(va, vb).mult(0.5);

  // calculate offset based on distance between two points
  let distance =  va.dist(vb);
  // standard deviation
  let sd = distance/3;

  // randomGaussian(mean, standardDeviation)
  let v = createVector(randomGaussian(mid.x,sd),randomGaussian(mid.y,sd));

  if(distance > 20){
    generatePath(va, mid);
    generatePath(mid, vb);
  } else {
    line(va.x, va.y, v.x, v.y);
    line(v.x, v.y, vb.x, vb.y);
  }
}
