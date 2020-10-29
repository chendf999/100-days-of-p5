let total = 500, speed = 30, scale = 280;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30);
  noFill();
  translate(width/2, height/2);

  let t = frameCount / speed;

  for(let i = 0; i < total; i++){
    let angle = map(i, 0, total, 0, TWO_PI);

    let center = getCenter(angle, t, scale);
    let size = getSize(angle, t, scale);
    let color = getColor(angle, t);

    stroke(color);
    ellipse(center.x, center.y, size);
  }
}

function getCenter(angle, t, scale){
  let dir = createVector(cos(angle), sin(angle));
  let dist = 0.5 + 0.2 * cos(angle * 6 + cos(angle * 8 + t));

  let center = dir.mult(dist * scale);
  return center
}

function getSize(angle, t, scale){
  let s = 0.2 + 0.12 * cos(angle * 9 - t * 2);
  let size = scale * s;
  return size
}

function getColor(angle, t){
  let a = angle * 8 + t * 2;
  let r = 0.6 + 0.5 * cos(a),
      g = 0.6 + 0.3 * cos(a - PI / 3),
      b = 0.6 + 0.1 * cos(a - 2* PI/ 3);
  return color(r * 255, g * 255, b * 255, 150);
}
