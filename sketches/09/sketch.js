let angle = 0;

class Module {
  constructor(x,y,d){
    this.x=x;
    this.y=y;
    this.d=d;
  }

  circle(){
    stroke(80);
    strokeWeight(1);
    ellipse(this.x,this.y,this.d,this.d);
  }

  hand(start){
    angle = start + frameCount/30;
    let sx = this.x + cos(angle)*this.d/2;
    let sy = this.y + sin(angle)*this.d/2;

    stroke(150);
    strokeWeight(3);
    line(this.x, this.y, sx, sy);
  }
}

let data = [];
let distance = 50;
let diameter = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();

  let index=0;
  let numX = Math.ceil(width/distance);
  let numY = Math.ceil(height/distance);

  for(i=0;i<numX;i++){
    for(j=0;j<numY;j++){
      data[index] = new Module(i*distance,j*distance,diameter);
      index++;
    }
  }
}

function draw() {
  background(30);
  noFill();

  push();
  translate(diameter/2, diameter/2);
  for(i=0;i<data.length;i++){
    data[i].circle();
    data[i].hand(i/50);
  };
  pop();
}
