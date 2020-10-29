let font;
let pars = [];

function preload() {
  font = loadFont("https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);

  textFont(font);

  let pts = font.textToPoints(
    'NOISE', width/2 -250,height/2 + 90, 180, {
      sampleFactor: 0.8
    });

  for(let i=0;i<pts.length;i++){
    let pt = pts[i];
    pars.push(new Particle(pt.x, pt.y));
  }
}

function draw() {
  noStroke();

  for(let i=0;i<pars.length;i++){
    pars[i].update();
    pars[i].display();
  }
}

function mousePressed(){
  setup();
  draw();
}

class Particle {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-1,1), random(-1,0));
    this.acc = createVector();
    this.alpha = 255;
    this.maxSpeed = 0.5;
  }

  update(){
    let angle = noise(this.pos.x/100, this.pos.y/100)*10;

    this.alpha -= 3;
    this.acc = createVector(cos(angle), sin(angle));
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.acc.mult(0);
  }

  display(){
    fill(this.alpha, 220, 250, this.alpha);
    ellipse(this.pos.x, this.pos.y, 1,1);
  }
}
