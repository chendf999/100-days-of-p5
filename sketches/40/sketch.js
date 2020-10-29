let scl = 800;
let pars1 = [];
let pars2 = [];
let pars3 = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#212851');

  for(i = 0; i < 50; i++){
    pars1[i] = new Particle(random(width), random(height));
    pars2[i] = new Particle(random(width), random(height));
    pars3[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  stroke('#FEF075'); // yellow
  renderPars(pars1);

  stroke('#0072A4'); // dark blue
  renderPars(pars2);

  stroke('#12A9EA'); // light blue
  renderPars(pars3);
}

function renderPars(pars){
  for(i=0; i< pars.length; i++){
    pars[i].update();
    pars[i].edge();
    pars[i].display();
  }
}

class Particle {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.prev = createVector();
    this.vel = createVector();
    this.r = floor(random(2,4));
    this.speed = 0.4;
  }

  display(){
    strokeWeight(this.r);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
  }

  update(){
    let angle = noise(this.pos.x/scl, this.pos.y/scl)*TWO_PI*scl;
    this.vel = createVector(cos(angle), sin(angle)).setMag(this.speed);

    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;

    this.pos.add(this.vel);
  }

  edge(){
    if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
			this.pos.x = random(width);
			this.pos.y = random(height);
      this.prev.x = this.pos.x;
      this.prev.y = this.pos.y;
		}
  }
}
