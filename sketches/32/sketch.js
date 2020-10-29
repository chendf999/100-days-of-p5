let amin, amax, bmin, bmax;
let zoom, time;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  reset();
  noLoop();
}

function draw() {
  background(30);
  loadPixels();

  let iteration = 100;

  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      let a = map(x,0,width,amin,amax);
      let b = map(y,0,height,bmin,bmax);

      // record prev a and b as ca and cb
      let ca = a;
      let cb = b;

      // calculate color based on n
      let n = 0;

      while(n < iteration){
        let aa = a * a - b * b;
        let bb = 2 * a * b;

        // reset a and b
        a = aa + ca; // ca = prev a
        b = bb + cb; // cb = prev b

        if (a > 20 || b > 20) {
          break;
        }
        n++;
      }

      let bright = map(n, 0, iteration, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);

      if (n === iteration) {
        bright = 0;
      }

      let pix = 4*(x + y * width);
      pixels[pix + 0] = 0; // r
      pixels[pix + 1] = 0; // g
      pixels[pix + 2] = bright; // b
      // pixels[pix + 3] = 255;
    }
  }
  updatePixels();

  // scale
  noFill();
  stroke(200);
  rect(width/2 -150, height -30, 300,5);
  fill(0,0,255);
  noStroke();
  rect(width/2 -150, height -30,time*60,5);
}

function mousePressed(){
  let amid = map(mouseX,0,width,amin,amax);
  let bmid = map(mouseY,0,height,bmin,bmax);

  amin = amid - width/zoom;
  amax = amid + width/zoom;
  bmin = bmid - height/zoom;
  bmax = bmid + height/zoom;

  if(time > 4){
    reset();
  } else {
    zoom = zoom*10;
    time++;
  }
  redraw();
}

function reset(){
  let w = width/500;
  let h = height/500;

  zoom = 5000;
  time = 0;
  amin = -w;
  amax = w;
  bmin = -h;
  bmax = h;
}
