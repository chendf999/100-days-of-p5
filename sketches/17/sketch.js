let x = [], y = [];
let num = 8;
let size = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40);

  for(i=0;i<num;i++){
    x[i] = i*size;
    y[i] = i*size;
  }
}

function draw() {
  noStroke();
  background(30,30,30,50);

  fill(150,50,100);
  ellipse(mouseX,mouseY,20,20);

  let angle = atan2(mouseY -y[0], mouseX -x[0]);
  x[0] = mouseX - cos(angle)*size;
  y[0] = mouseY - sin(angle)*size;

  create(x[0],y[0],angle);

  for(i=1;i<num;i++){
    let a = atan2(y[i-1] -y[i], x[i-1] -x[i]);
    x[i] = x[i-1] - cos(a)*size;
    y[i] = y[i-1] - sin(a)*size;

    let r = map(i,0,num,150,50,10);
    let b = map(i,0,num,100,250,50);
    fill(r,50,b);
    create(x[i],y[i],a);
  }
}

function create(x,y,a){
  push();
  translate(x,y);
  rotate(a);
  ellipse(size,0,10,10);

  pop();
}
