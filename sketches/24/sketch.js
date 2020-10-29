let clocks = [];
let size = 30;
let w = size *24;
let h = size *15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10,10,50);

  for(let i=0;i<w/size;i++){
    clocks[i] = [];
    for(let j=0;j<h/size;j++){
      clocks[i].push(new Clock(i*size,j*size, sqrt(i)*j/200));
    }
  }
}

function draw() {
  background(10,10,50,10);

  translate(width/2-w/2, height/2-h/2);
  for(let i=0;i<w/size;i++){

    for(let j=0;j<h/size;j++){
      clocks[i][j].update();
      clocks[i][j].mouse();
      clocks[i][j].display();
    }
  }
}

class Clock {
  constructor(x,y,xoff){
    this.x = x;
    this.y = y;
    this.a = 0;
    this.xoff = xoff;
  }

  display(){
    push();
    translate(this.x, this.y);
    rotate(this.a);

    stroke(100,200,250,90);
    line(0,22,0,-22);

    pop();
    push();
  }

  update(){
    this.a = map(noise(this.xoff), 0,1,0,10*PI);
    this.xoff = this.xoff+1/300;
  }

  mouse(){
    let angle = atan2(mouseY-height/2+h/2-this.y, mouseX-this.x-width/2+w/2);
    this.a = angle + this.a;
  }

}
