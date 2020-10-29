let cols, rows;
let current, previous;
let rain = [];
let dampening = 0.985;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  cols = width;
  rows = height;

  current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  // equals to the following
  // for (var i = 0; i < cols; i++) {
  //   current[i] = [];
  //   previous[i] = [];
  //   for (var j = 0; j < rows; j++) {
  //     current[i][j] = 0;
  //     previous[j] = 0;
  //   }
  // }

}

function draw() {
  background(30);

  loadPixels();

  // https://web.archive.org/web/20160418004149/http://freespace.virgin.net/hugo.elias/graphics/x_water.htm
  for (let i = 1; i < cols - 1; i++) {
    for (let j = 1; j < rows - 1; j++) {
      let buffer = (previous[i - 1][j] + previous[i + 1][j] + previous[i][j - 1] + previous[i][j + 1]) /2
      current[i][j] = (buffer - current[i][j]) * dampening;

      let index = (i + j * cols) * 4;
      pixels[index + 0] = current[i][j];
      pixels[index + 1] = current[i][j];
      pixels[index + 2] = current[i][j];
      pixels[index + 3] = 240;
    }
  }

  let x = parseInt(random(width)), y = parseInt(random(height));
  previous[x][y] = 2000;

  updatePixels();

  let temp = previous;
  previous = current;
  current = temp;
}

function mouseDragged() {
  previous[mouseX][mouseY] = 1000;
}
