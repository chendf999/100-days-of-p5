function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30);

  push();
  translate(width/2, height/2 + 40);

  fill(255);
  ellipse(-65,-90,24,28);
  ellipse(65,-90,24,28);
  fill(30);
  ellipse(-63,-86,30,30);
  ellipse(63,-86,30,30);

  fill(255);
  ellipse(0,0,110,90);

  fill(30);
  ellipse(0,-30,30,20); // mouse
  ellipse(0,15,16,30); // nose

  fill('#E11F2B');
  ellipse(-90,-10,50,50); // left cheek
  ellipse(90,-10,50,50); // right cheek
  pop();

  let e1 = new Eye(width/2 - 50, height/2 -20, 40, 0);
  let e2 = new Eye(width/2 + 50, height/2 -20, 40, 0);

  e1.update(mouseX, mouseY);
  e1.display();


  e2.update(mouseX, mouseY);
  e2.display();
}

class Eye {
  constructor(px,py,size, angle){
    this.px = px;
    this.py = py;
    this.size = size;
    this.angle = angle;
  }

  display(){
    noStroke();

    push();
    translate(this.px, this.py);
    ellipse(0,0,this.size,this.size);

    fill(30);
    rotate(this.angle);

    ellipse(
      this.size/10,0,
      this.size/2,this.size/2
    );

    pop();
  }

  update(mx, my){
    this.angle = atan2(my - this.py, mx - this.px);
  }
}
