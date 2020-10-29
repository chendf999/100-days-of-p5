let off = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
}

function draw() {
  background('#001B61');

  off = off + 0.01;

  let op = 100 + 200 * noise(off);

  fill(200, 150, 10, op/3);

  noStroke();
  rect(0,0,width,height);

  push();
  translate(width/2, height/2 - 40);

  fill(200, 150, 10, op);
  beginShape();
  vertex(50,0);
  vertex(30,100);
  vertex(-30,100);
  vertex(-50,0);
  endShape();

  stroke(30);
  strokeWeight(4);
  line(20,0,14,100);
  line(-20,0,-14,100);

  noStroke();
  fill(30);
  rect(-30,100,60,10,0,0,5,5);
  rect(-50,-10,100,10,5,5,0,0);
  rect(-20,-40,40,10,5,5,0,0);

  rect(-8,100,16,height/2);

  ellipse(0,-45,20,20);

  beginShape();
  vertex(-50,0);
  vertex(-20,-30);
  vertex(20,-30);
  vertex(50,0);
  endShape();

  beginShape();
  vertex(-20,110);
  vertex(20,110);
  vertex(0,140);
  endShape();

  pop();
}
