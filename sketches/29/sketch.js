let font;
let vehicles = [];
let colors = ["#FFC09F", "#FFEE93", "#FCF5C7", "#A0CED9", "#ADF7B6"];

function preload() {
  font = loadFont("https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont(font);
  textSize(110);

  let pts = font.textToPoints("100 DAYS OF P5", width / 2 - 410, height / 2 + 20);

  for (let i = 0; i < pts.length; i++) {
    let pt = pts[i];
    let index = Math.floor(random(colors.length));
    let color = colors[index];
    let veh = new Vehicle(pt.x, pt.y, color);
    vehicles.push(veh);
  }
}

function draw() {
  background(30);
  fill(200);
  noStroke();

  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];
    v.behaviors();
    v.update();
    v.display();
  }
}

class Vehicle {
  constructor(x, y, color) {
    this.pos = createVector(random(width), random(height));
    this.tar = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.maxspeed = 8;
    this.maxforce = 1;
    this.color = color;
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  behaviors() {
    let arrive = this.arrive(this.tar);
    let mouse = createVector(mouseX, mouseY);
    let flee = this.flee(mouse);

    arrive.mult(2);
    flee.mult(7);

    this.applyForce(arrive);
    this.applyForce(flee);
  }

  applyForce(f) {
    this.acc.add(f);
  }

  flee(tar) {
    let desired = p5.Vector.sub(tar, this.pos);
    let d = desired.mag();
    if (d < 50) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      let steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }

  arrive(tar) {
    let desired = p5.Vector.sub(tar, this.pos);
    let d = desired.mag();
    let speed = this.maxspeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);

    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }

  display() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, 6, 6);
  }
}
