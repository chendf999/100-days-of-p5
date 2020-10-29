let stars = [];
let speed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(i=0;i<400;i++){
    stars[i] = new Star;
  }
}

function draw() {
  background(30);
  speed = map(mouseY,0,height,1,5);

  push();
  translate(width/2, height/2);
  for(i=0;i<400;i++){
    stars[i].update();
    stars[i].display();
  }
  pop();
}

class Star {
  constructor(){
    this.x = random(-width/2, width/2);
    this.y = random(-height/2,height/2);
    this.z = random(width);
  }

  display(){
    let sx = map(this.x/this.z, 0,1,0,width);
    let sy = map(this.y/this.z, 0,1,0,height);

    push();
    translate(sx,sy);

    fill(150);
    noStroke();

    let size = map(this.z,0,width,10,0);
    ellipse(0,0,size,size);
    pop();
  }

  update(){
    this.z = this.z - speed;
    if(this.z < 1){
      this.z = width;
      this.x = random(-width/2, width/2);
      this.y = random(-height/2,height/2);
    }
  }
}
