function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(31,40,49);

  // vertical grid
  for(i=0;i<windowWidth; i+=20){
    if(i%100 === 0){
      stroke(48,55,71);
    } else {
      stroke(36,45,56);
    }
    line(i,0,i,windowHeight);
  }

  for(i=windowHeight; i>0; i-=20){
    if((windowHeight-i)%100 === 0){
      stroke(48,55,71);
    } else {
      stroke(36,45,56);
    }
    line(0,i,windowWidth,i);
  }

  let x = 100;
  let y = windowHeight-100;

  // x axis - green
  stroke(0,103,28);
  line(x,y,windowWidth,y);

  // y axis - red
  stroke(107,32,37);
  line(x,y,x,0);

  // coordinate sign
  stroke(228,227,227);
  noFill();
  rectMode(CENTER);
  rect(x,y,10,10);

  line(x,y,x+50,y); // x
  line(x+60,y-10,x+70,y);
  line(x+70,y-10,x+60,y);

  line(x,y,x,y-50); // y
  line(x,y-75,x+5,y-70);
  line(x+10,y-75,x+5,y-70);
  line(x+5,y-62,x+5,y-70);

  // mouse interactions
  rect(mouseX,mouseY,8,8);
  line(mouseX+4,mouseY,mouseX+50,mouseY);
  line(mouseX-50,mouseY,mouseX-4,mouseY);
  line(mouseX,mouseY+4,mouseX,mouseY+50);
  line(mouseX,mouseY-4,mouseX,mouseY-50);
}
