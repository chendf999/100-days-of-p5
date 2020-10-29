let c = 4;
let flower = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  for(let n=0;n<= 150;n++){
    let a = n*137.5;
    let r = c*sqrt(n);

    let petal = new Petal(r*cos(a),r*sin(a));
    flower.push(petal);
  }
}

function draw() {
  background(30);
  noStroke();
  fill(100,180,250);

  translate(width/2, height/2);

  for(let i=1;i< flower.length;i++){
    flower[i].move();
    flower[i].display(map(i,1,500,1,10));
  }

}

class Petal {
  constructor(x,y){
    this.angle = 0;
    this.x = x;
    this.y = y;
    this.v = 0;
    this.p = createVector(x,y);
  }

  display(size){
    push();
    rotate(45);
    rect(this.p.x,this.p.y,size,size);
    pop();
  }

  move(){
    this.angle = this.angle +3;
    this.v = createVector(this.x,this.y).setMag(sin(this.angle));
    this.p.add(this.v);

  }
}
