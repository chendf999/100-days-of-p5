let space = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30);
  strokeWeight(2);
  noFill();

  for(i = 0; i < 50; i++){
    let opacity = map(i, 0, 30, 0, 150);

    stroke(255,255,255, opacity);
    beginShape();
    for(x = -20; x < width+20; x+=10){
      let n = noise(x* 0.0008,i*space* 0.005,frameCount*0.02);
      let y = map(n, 0, 1, 0, height);
      curveVertex(x, i*space + y);
    }
    endShape();
  }
}
