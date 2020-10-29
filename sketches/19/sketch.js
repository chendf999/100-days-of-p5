let par = [];
let g = 9;
let ym = 1;
let xm = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30);

  let p = new Particle();
  par.push(p);

  for(let i = par.length - 1;i> 0; i--){
    par[i].update();
    par[i].show();

    if(par[i].y > height || par[i].alpha < 0){
      par.splice(i,1);
    }
  }
}

class Particle {
  constructor(){
    this.x = width/2;
    this.y = height;
    this.vx = random(-3,3)
    this.vy = random(-10,-5);
    this.angle = this.vx/g;
    this.t = 0;
    this.alpha = 100;
  }

  show(){
    noStroke();
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    fill(50,50,250,this.alpha);
    rect(0,0,8,20);

    pop();
  }

  update(){
    this.alpha = this.alpha -0.5;
    this.t = this.t + 0.01;
    this.x = this.x + this.vx;
    this.y = this.y + this.vy + this.t*g;
    this.angle = this.angle + atan(this.vx/this.vy);
  }
}
