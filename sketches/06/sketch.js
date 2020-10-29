function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
}

function draw() {
  background(30);
  noFill();
  stroke(236,214,160);

  let d = abs(mouseX - width/2)/10;
  if(d>30){ d=30;}

  let side = int(map(abs(mouseX-width/2),0,width,4,50));

  push();
  translate(width/2, height/2);
  rotate(frameCount/300);
  star(0,0,side,30,50);
  polygon(0,0,side,50);
  polygon(0,0,side,90);
  star(0,0,side,90,130);
  pop();

  push();
  translate(width/2, height/2);
  rotate(frameCount/300 + PI/side);
  star(0,0,side,10,30);
  star(0,0,side,50,90);
  star(0,0,side,130,200);
  pop();

}

function polygon(x,y,n,r){
  beginShape();

  for(i=1;i<=n;i++){

    let angle = i*2*PI/n;
    sx = x + r*sin(angle);
    sy = y + r*cos(angle);

    vertex(sx,sy);
  }
  endShape(CLOSE);
}

function star(x,y,n,r1,r2){
  beginShape();

  for(i=1;i<=n;i++){

    let angle1 = i*2*PI/n;
    let angle2 = angle1 + PI/n;

    x1 = x + r1*sin(angle1);
    y1 = y + r1*cos(angle1);

    vertex(x1,y1);

    x2 = x + r2*sin(angle2);
    y2 = y + r2*cos(angle2);

    vertex(x2,y2);
  }
  endShape(CLOSE);
}
