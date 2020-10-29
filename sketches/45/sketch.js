let font;
let pars = [];
let angle = 0;
let p, v;
let r = 180, speed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(35);

  p = createVector(width/2,height/2);
  v = createVector(3,3);
}

function draw() {
  noStroke();
  background(30,10);

  push();
  noFill();
  stroke(80);
  strokeWeight(4);
  translate(width/2, height/2);
  ellipse(0,0,2*r+50);
  pop();

  for(let i=0;i<20;i++){
    pars.push(new Particle(p.x,p.y));
  }

  let d = dist(p.x, p.y, width/2, height/2);
  if(d > r){
    v.x = -v.x;
    v.y = -v.y;
  }

  v.x = v.x + random(-1,1);
  v.y = v.y + random(-1,1);
  v.setMag(speed);

  p.add(v);
  // ellipse(p.x, p.y, 50);

  for(let i=0;i<pars.length;i++){
    pars[i].update();
    pars[i].display();
    pars[i].remove(i);
  }

  angle += 0.1;
}

class Particle {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.prev = createVector(x,y);
    this.vel = createVector(random(-5,5), random(-5,5));
    this.acc = createVector();
    this.alpha = random(100, 200);
    this.blue = map(abs(this.vel.x), 0, 5, 100,255);
    this.maxSpeed = 5;
  }

  update(){
    let angle = noise(this.pos.x/100, this.pos.y/100)*100;
    this.acc = createVector(cos(angle), sin(angle));

    this.alpha -= 3;
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;

    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    // this.acc.mult(0);
  }

  remove(i){
    if(this.alpha < 0){
      pars.splice(i,1);
    }
  }

  display(){
    stroke(120,200, this.blue, this.alpha);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
  }
}
