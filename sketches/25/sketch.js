let scl = 20;
let cols, rows;
let zoff = 0;
let inc = 0.05;
let par = [];
let flowfield = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = floor(width/scl);
  rows = floor(height/scl);
  background(40);

  flowfield = new Array(cols * rows);

  for(let i=0; i<1000; i++){
    par[i] = new Particle();
  }
}

function draw() {
  background(30,30,30,10);
  noFill();
  stroke(120,250,160);

  let yoff = 0; // cannot make global -> or error occurs
  for (let y = 0; y < rows; y++) {

    let xoff = 0;
    for (let x = 0; x < cols; x++) {

      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);

      let index = x+y*cols;
      flowfield[index] = v;
      xoff = xoff + inc;

      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff = yoff + inc;
    zoff = zoff + 0.0001;
  }

  for(let i=0; i<par.length; i++){
    par[i].follow(flowfield);
    par[i].update();
    par[i].edges();
    par[i].display();
  }
}

class Particle {
  constructor(){
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);
    this.maxspeed = 5;
    this.prev = this.pos.copy();
  }

  follow(vectors){
    // locate the particle
    let x = floor(this.pos.x/scl);
    let y = floor(this.pos.y/scl);

    // locate the particle in the array
    let index = x+y*cols;

    let force = vectors[index];
    this.addForce(force);
  }

  update(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  addForce(force){
    this.acc.add(force);
  }

  display(){
    strokeWeight(2);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
    this.updatePrev();
  }

  edges(){
    if(this.pos.x > width){
      this.pos.x = 0;
      this.pos.y = random(height);
      this.updatePrev();
    }
    if(this.pos.x < 0){
      this.pos.x = width;
      this.pos.y = random(height);
      this.updatePrev();
    }
    if(this.pos.y > height){
      this.pos.x = random(width);
      this.pos.y = 0;
      this.updatePrev();
    }
    if(this.pos.y < 0){
      this.pos.x = random(width);
      this.pos.y = height;
      this.updatePrev();
    }
  }

  updatePrev(){
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }
}
