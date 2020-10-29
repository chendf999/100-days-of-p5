let angleX =0;
let angleY = 0;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  fill(150);
  textAlign(CENTER, CENTER);
  textSize(16);
}

function draw() {
  background(30);
  normalMaterial();

  orbitControl();
  rotateY(frameCount/200);
  rotateX(frameCount/200);

  push();
  translate(0, -60);
  cone(40, 50);
  pop();

  push();
  translate(0, -55);
  cylinder(35, 30);
  pop();

  cylinder(40, 120);
  cylinder(30, 145);

  push();
  translate(0, 60);
  cone(40, -50);
  pop();

  push();
  translate(0, 105);
  cylinder(40, 40);
  pop();

  push();
  translate(0, 120);
  cone(50, -50);
  pop();

  push();
  translate(0, 150);
  cylinder(2, 150);
  pop();

  push();
  translate(0, 230);
  cylinder(4, 10);
  pop();

  // wings
  push();
  translate(-80, 70);
  box(70, 70, 3);
  pop();

  push();
  translate(80, 70);
  box(70, 70, 3);
  pop();

  push();
  translate(-155, 70);
  box(70, 70, 3);
  pop();

  push();
  translate(155, 70);
  box(70, 70, 3);
  pop();
}
