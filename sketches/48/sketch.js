let par = [];
let colors = ['#f25f5c', '#ffe066', '#247ba0', '#70c1b3'];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  blendMode(BLEND);
  background(30);
  blendMode(ADD);

  let p;
  if(mouseX === 0 && mouseY === 0){
    p = new Particle(width/2, height/2);
  } else {
    p = new Particle(mouseX, mouseY);
  }
  par.push(p);

  for(let i = par.length - 1;i> 0; i--){
    par[i].update();
    par[i].show();

    if(par[i].size < 1){
      par.splice(i,1);
    }
  }
}

class Particle {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D().setMag(0.1);
    this.acc = p5.Vector.random2D().setMag(0.3);

    this.size = 100;
    this.color = colors[Math.floor(random(colors.length))];
  }

  show(){
    noStroke();
    push();
    translate(this.pos.x, this.pos.y);
    fill(this.color);

	drawingContext.shadowColor = color(this.color);
	drawingContext.shadowBlur = 20;

    ellipse(0,0,this.size);
    pop();
  }

  update(){
    this.size = 0.98 * this.size;
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.vel.limit(2);
  }
}
