let scl = 10;
let move = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  ortho(-400, 400, -400, 400, 100, 1000);
}

function draw() {
  background(30);
  stroke(30);
  fill(200);
  rectMode(CENTER);

  normalMaterial();

  translate(0,-90);
  rotateX(PI/3);
  rotateZ(PI/4);

  for(x = 0; x < scl*20; x+=scl){
    for(y = 0; y < scl*20; y+=scl){
      let ctr = scl*10 + scl/2;
      let d = dist(x, y, ctr, ctr);
      let a = move + map(d, 0, ctr*sqrt(2), -PI, PI);

      push();
      translate(x,y);
      box(scl-1, scl-1, scl*10 + scl*9*sin(a));
      pop();
    }
  }

  move = move + 0.1;
}
