let circles = [];
let w = 400, h = 250;
let startX, startY, endX, endY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  startX = (width - w)/ 2;
  startY = (height - h)/ 2;
  endX = (width + w)/ 2;
  endY = (height + h)/ 2;

  for(let i = 0; i< 8; i++){
    circles.push(new Circle(random(startX, endX), random(startY, endY)));
  }
}

function draw() {
  background(30);

  loadPixels();

  for (x = startX; x < endX; x++) {
    for (y = startY; y < endY; y++) {
      let sum = 0;
      for (i = 0; i < circles.length; i++) {
        let xdif = x - circles[i].pos.x;
        let ydif = y - circles[i].pos.y;
        let d = sqrt(xdif * xdif + ydif * ydif);
        sum += 50 * circles[i].d/ d;
      }

      set(x,y,sum)
    }
  }

  updatePixels();

  for(let i = 0; i < circles.length; i++){
    circles[i].update();
    // circles[i].display();
  }
}

class Circle {
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-2,2), random(-2,2));
    this.d = random(50, 70);
  }

  display(){
    ellipse(this.pos.x, this.pos.y, this.d);
  }

  update(){
    if (this.pos.x > endX || this.pos.x < startX){
      this.vel.x = - this.vel.x;
    }
    if (this.pos.y > endY || this.pos.y < startY){
      this.vel.y = - this.vel.y;
    }
    this.pos.add(this.vel);
  }
}
