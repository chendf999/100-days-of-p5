let lanterns = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i=0; i< 30; i++){
    lanterns.push(new Lantern(random(0,width-100), height + random(0, height)));
  }
}

function draw() {
  background('#0D1846');

  for(let i=0; i< lanterns.length; i++){
    lanterns[i].display();
  }
}

class Lantern {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.xoff = random(0,10);
    this.yoff = random(0,10);
  }

  display(){
    this.xoff = this.xoff + 0.1;
    this.yoff = this.yoff + 0.1;

    if(this.x > 0 && this.y > -200){

    this.x = this.x + noise(this.xoff)/2;
    this.y = this.y - noise(this.yoff)*2;

  } else {
    this.x = random(0,width*0.75);
    this.y = height + 100;
  }

  push();
  translate(this.x,this.y);
  rotate(sin(this.xoff/10)/10);

  fill('#FF9F02');
  noStroke();

  beginShape();

  vertex(-40,0);
  vertex(-25,60);
  vertex(25,60);
  vertex(40,0);
  vertex(30,-20);
  vertex(-30,-20);
  vertex(-40,0);

  endShape();

  for(let i=0;i<100;i=i+5){
    fill(255,240,145,100-i);
    ellipse(0,45-i/5,i,i*1.2);
  }

  fill('#FFD73D');
  ellipse(0,60,50,10);

  fill(255);
  ellipse(0,60,20,5);

  pop();
  }
}
