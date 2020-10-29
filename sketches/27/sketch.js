let sym = 7;

let a = 10, b = 20, c = 7/3;
let x = 1, y = 1, z = 1;

let scl = 8;
let arr = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(40);
}

function draw() {
  background(30,30,30,10);
  stroke(100,150,250);
  // strokeWeight(2);
  noFill();

  let dt = 0.02;
  let dx = (a*(y-x))*dt;
  let dy = (x*(b-z)-y)*dt;
  let dz = (x*y-c*z)*dt;

  x = x+dx;
  y = y+dy;
  z = z+dz;

  arr.push({
  x:scl*x, y:scl*y, z:scl*z})

  if(arr.length > 30){
    arr.splice(0,1);
  }

  translate(width/2, height/2);
  let angle = 2*PI/sym;
  let color = 100;

  for(let i=0; i< sym; i++){
    push();

    rotate(i*angle);
    beginShape();
  for(let i=0; i<arr.length;i++){
    color++;
    if(color>200){
      color = 100;
    }
    stroke(200, color, 255-color);
    // line(arr[i].x+random(70),arr[i].y-random(70),arr[i].x+random(70),arr[i].y-random(70))
    curveVertex(arr[i].x,arr[i].y,arr[i].z);
  }
  endShape();
    pop();

    }
}
