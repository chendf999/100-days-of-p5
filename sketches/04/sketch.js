let gp;

let r=30;
let s=1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gp = createGraphics(300,400);
}

function draw() {
  background(30);

  // mouse
  fill(110);
  noStroke();
  ellipse(mouseX, mouseY,30,30);

  // outline
  fill(30);
  strokeWeight(2);
  stroke(255,255,255,80);
  rectMode(CENTER);
  rect(width/2, height/2, 320,460,10);

  strokeWeight(1);
  ellipse(width/2, height/2+214, 22,22);

  gp.background(50);
  gp.fill(70);
  gp.noStroke();

  // icons
  for(i=0;i<4;i++){
    for(j=0;j<3;j++){
      gp.rect(30+i*70,40+j*70,30,30,4)
    }
  }

  // lower icons
  for(i=0;i<4;i++){
    gp.rect(30+i*70,355,30,30,4)
  }

  // mouse
  if(r===60){
    s=-1;
  } else if(r===20){
    s=1;
  }

  r=r+s;

  gp.fill(200,100,100,50);
  gp.ellipse(mouseX-width/2+150, mouseY-height/2+200,r,r);

  gp.fill(200,100,100);
  gp.ellipse(mouseX-width/2+150, mouseY-height/2+200,28,28);

  image(gp, width/2-150, height/2-200);
}
