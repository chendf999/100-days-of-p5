function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30);
  noFill();

  let d = 40
  for(i=-5;i<6;i++){
    stroke('#EC4A41');
    bezier(0,height/2+i*d,mouseX, mouseY, mouseX,mouseY,width,height/2+i*d);

    stroke('#87B340');
    bezier(0,height/2+i*d,width-mouseX, height-mouseY, width-mouseX,height-mouseY,width,height/2+i*d);
  }
  }
