let mercury,venus,earth,mars,jupiter,satern,uranus,neptune;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mercury = new Planet(5, 80);
  venus = new Planet(4, 130);
  earth = new Planet(5, 150);
  mars = new Planet(4, 180);
  jupiter = new Planet(20, 280);

  satern = new Ringed(18, 400, 20);
  uranus = new Ringed(15, 480, 17);

  neptune = new Planet(15, 540);
}

function draw() {
  background(30);

  noStroke();
  fill(255,225,0);
  ellipse(width/2, height/2, 50,50);
  fill(255,225,0,80);
  ellipse(width/2, height/2, 60,60);

  mercury.move(10);
  venus.move(40);
  earth.move(50);
  mars.move(60);
  jupiter.move(120);
  satern.move(150);
  uranus.move(200);
  neptune.move(250);

  mercury.display('#C4956B');
  venus.display('#ED7E00');
  earth.display('#37D1FE');
  mars.display('#FF4533');
  jupiter.display('#F7B97D');

  satern.display('#CAA778');
  satern.ringDisplay('#CAA778');

  uranus.display('#A2E2DE');
  uranus.ringDisplay('#A2E2DE');

  neptune.display('#009DE5');
}

class Planet {
  constructor(size,orbit){
    this.size = size;
    this.orbit = orbit;
    this.x = (width + orbit)/2;
    this.y = height/2;
  }

  display(color){
    push();
    translate(width/2,height/2);
    stroke(50);
    noFill();
    ellipse(0,0,this.orbit,this.orbit);
    pop();

    push();
    translate(this.x,this.y);
    noStroke();
    fill(color);
    ellipse(0,0,this.size,this.size);
    pop();
  }

  move(t){
    this.x = width/2 + this.orbit * sin(frameCount/t)/2;
    this.y = height/2 + this.orbit * cos(frameCount/t)/2;
  }
}

class Ringed extends Planet{
  constructor(size,orbit,ring){
    super(size,orbit);
    this.ring = ring;
  }

  ringDisplay(color){
    push();
    translate(this.x,this.y);

    noFill();
    stroke(color);
    strokeWeight(3);
    ellipse(0,0,this.ring+5,this.ring+5);
    pop();
  }
}
