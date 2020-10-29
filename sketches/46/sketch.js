let scl = 15;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(30);
  noStroke();
  // normalMaterial();
  // orbitControl();
  rotateX(PI/4);
  rotateZ(PI/4);

  directionalLight(0,255,255,-1,1,0);
  directionalLight(0,0,255,1,1,0);

  let speed = frameCount/20;
  let amp = 0.5;
  let max = scl*8;

  for(x=-max; x< max; x+=1.5*scl){
    for(y=-max; y< max; y+=1.5*scl){
      push();
      translate(x,y);
      let xoff = map(x, 0, scl*15, -PI, PI);
      let yoff = map(y, 0, scl*15, -PI, PI);
      rotateX(sin(speed + xoff)*amp);
      rotateY(cos(speed + yoff)*amp);
      box(scl,scl,scl*5);
      pop();
    }
  }
}
