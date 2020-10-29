let recTime = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  noLoop();
}

function draw() {
  noFill();

  push();
  translate(width/2 - 1.618*200, height/2 - 200);
  spiral(400);
  pop();
}

function spiral(size){
  stroke('#8E8265');
  strokeWeight(1);
  rect(0,0,size,size);

  strokeWeight(2);
  arc(size,size,2*size,2*size,-PI,-PI/2);

  push();
  if(size > 30){
    translate(1.618*size,0);
    rotate(PI/2);
    spiral(0.618*size);
  }
  pop();
}
