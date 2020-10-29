let t = 0;
let size = 35;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
}

function draw() {
  background(30,30,30,20);

  fill(100, 250, 250);
  noStroke();

  t = t + 1/20;

  for (let x = 0; x <= width; x = x + size) {
    for (let y = 0; y <= height; y = y + size) {
      let angleX = map(mouseX, 0,width, -3*PI, 3*PI);
      let angleY = map(mouseY, 0,height, -2*PI, 2*PI);

      let angle = angleX * (x / width) + angleY * (y / height);

      fill(100,250,250,80);
      stroke(100,150,250);
      strokeWeight(2);
      ellipse(x + size*sin(t + angle),y + size*cos(t + angle),15,15);
    }
  }
}
