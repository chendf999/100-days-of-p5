let space = 20;
let frame = space * 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(30);

  fill(200);
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(14);
  text('Click to generate new pattern', width/2, height -30);

  strokeCap(PROJECT);
  strokeWeight(3);
  stroke(200);
  strokeJoin(BEVEL);

  translate(width/2-frame/2, height/2-frame/2);

  for(i=0; i< frame; i+=space){
    for(j=0;j<frame;j+=space){
      if(random(1)<0.3){
        line(i,j,i+space,j);
      } else {
        line(i,j,i+space,j+space);
      }
    }
  }

  rectMode(CENTER);
  noFill();
  stroke(250);
  strokeWeight(10);
  rect(frame/2,frame/2,frame+5,frame+5);
}

function mousePressed(){
  redraw();
}
