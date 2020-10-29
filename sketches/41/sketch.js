let explode = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40);
}

function draw() {
  background(30,50);
  fill(255);
  noStroke();

  if(frameCount%120 === 0 || frameCount === 10){
    firework(random(width/3, 2*width/3), random(50, height/2));
  }

  for(i = 0; i< explode.length; i++){
    explode[i].update();
    explode[i].display();
    explode[i].remove(i);
  }
}

function firework(x,y){
  for(i = 0; i< 200; i++){
    explode[i] = new Particle(x,y);
  }
}

class Particle {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.a = random(0, TWO_PI)
    this.vel = createVector(cos(this.a), sin(this.a)).setMag(random(-3,3));
    this.acc = this.vel.copy().mult(0.2);
    this.maxSpeed = 3;

    this.alpha = 255;
  }

  display(){
    fill(250, 240, 100, this.alpha);
    ellipse(this.pos.x, this.pos.y, 8);
  }

  update(){
    let g = createVector(0,0.005);
    this.acc = this.acc.add(g);

    this.alpha = this.alpha -3;
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
  }

  remove(i){
    if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0 || this.alpha < 0){
      explode.splice(i, 1);
    }
  }
}
