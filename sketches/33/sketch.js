let w, h;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  w = width / 600;
  h = height / 600;

  // noLoop();
}

function draw() {
  background(30);
  loadPixels();

  angle = angle + 0.15;

  let ca = map(sin(angle), -3, 3, -1.0767, -0.3633);
  let cb = map(cos(angle), -3, 3, 0.2683, 0.6283);

  // let ca = map(mouseX, 0, width, -w, w);
  // let cb = map(mouseY, 0, height, -h, h);
  // console.log(ca,cb);

  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {
      let a = map(x, 0, width, -w, w);
      let b = map(y, 0, height, -h, h);

      let bright = calc(a, b, ca, cb);

      let pix = 4 * (x + y * width);
      pixels[pix + 0] = 0;
      pixels[pix + 1] = bright / 2;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }

  updatePixels();
}

function calc(a, b, ca, cb) {
  let iteration = 50;
  let n = 0;

  while (n < iteration) {
    let aa = a * a - b * b;
    let bb = 2 * a * b;

    a = aa + ca;
    b = bb + cb;

    if (a * a + b * b > 10) {
      break;
    }
    n++;
  }

  let bright = map(n, 0, iteration, 0, 1);
  bright = map(sqrt(bright), 0, 1, 0, 255);

  if (n === iteration) {
    bright = 0;
  }

  return bright;
}
