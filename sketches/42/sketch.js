let count = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
}

function draw() {
  noFill();

  if(count < 200){
    stroke(count/2,255-count*0.7,200,100);
    beginShape();
    for(x = -20; x < width+20; x++){
      let n = noise(x* 0.002,frameCount*0.005);
      let y = map(n, 0, 1, 0, height);
      curveVertex(x, y);
    }
    endShape();
    count++;
  }

  fill(150);
  noStroke();
  textSize(16);
  textAlign(CENTER);
  text('Click to Generate New Pattern', width/2, height-50);
}

function mousePressed(){
  background(30);
  count = 0;
}
