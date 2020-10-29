let pars = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  while(pars.length < 80){
    let x = random(2 * width);
    let y = random(2 * height);
    let z = random(-height);

    let overlap = false;
    let counter = 0;

    for(i=0; i < pars.length; i++){
      let d = dist(x, y, z, pars[i].pos.x, pars[i].pos.y, pars[i].pos.z);
      if (d < 2 * pars[i].r) {
        overlap = true;
        counter++;
        break
      }
    }

    if(counter > 10000){
      break;
    }

    if(!overlap){
      pars.push(new Particle(x,y,z));
    }
  }
}

function draw() {
  background(150,100,130);
  noStroke();

  ambientLight(100);
  ambientMaterial(255,100,255);
  pointLight(255,255,0,0,0,0);
  directionalLight(0, 255, 0, -1, 1, -1);

  translate(-width, -height);

  for(i=0; i<pars.length;i++){
    pars[i].move();
    pars[i].display();
  }
}

class Particle {
  constructor(x,y,z){
    this.pos = createVector(x,y,z);
    this.vel = createVector(0, -1, 0);
    this.r = 100;
  }

  display(){
    push();
    translate(this.pos.x,this.pos.y,this.pos.z);
    sphere(this.r);
    pop();
  }

  move(){
    this.pos.add(this.vel);

    if(this.pos.y < -2 * this.r){
      this.pos.y = this.r + 2 * height;
    }
  }
}
