let flock = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i=0;i<150;i++){
    flock.push(new Boid);
  }
  background(40);
}

function draw() {
  background(30,30,30,80);
  for(let boid of flock){
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.display();
  }
}

class Boid {
  constructor(){
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D().setMag(random(2,4));
    this.acc = createVector();
    this.maxForce = 1;
    this.maxSpeed = 4;
    this.angle = random(PI);
  }

  display(){
    strokeWeight(10+3*sin(this.angle));
    stroke(100,230,255);
    point(this.pos.x, this.pos.y);
    strokeWeight(20+10*sin(this.angle));
    stroke(100,180,250,50);
    point(this.pos.x, this.pos.y);
  }

  edges(){
    if(this.pos.x > width){
      this.pos.x = 0;
      this.pos.y = random(height);
    } else if (this.pos.x < 0){
      this.pos.x = width;
      this.pos.y = random(height);
    }

    if(this.pos.y > height){
      this.pos.y = 0;
      this.pos.x = random(width);
    } else if (this.pos.y < 0){
      this.pos.y = height;
      this.pos.x = random(width);
    }
  }

  update(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.acc.mult(0);
    this.angle = this.angle + 0.3;
  }

  flock(boids){
    let alignment = this.align(boids);
    let cohesion = this.cohesion(boids);
    let separation = this.separation(boids);
    this.acc.add(alignment);
    this.acc.add(cohesion);
    this.acc.add(separation);
  }

  align(boids){
    let steering = createVector();
    let num = 0;

    // calculate average velocity
    for(let i =0; i< boids.length; i++){
      // care only items within a certain distance
      let d = dist(
        this.pos.x, this.pos.y,
        boids[i].pos.x, boids[i].pos.y
      );
      // within range but not this item
      if(boids[i] !== this && d < 150){
        // average velocity
        steering.add(boids[i].vel);
        num++;
      }
    }
    // divided by number
    if(num > 0){
      steering.div(num);
      steering.setMag(this.maxSpeed);
      // moving vel = steering vel - current vel
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    return steering
  }

  cohesion(boids){
    let steering = createVector();
    let num = 0;

    for(let i =0; i< boids.length; i++){
      let d = dist(
        this.pos.x, this.pos.y,
        boids[i].pos.x, boids[i].pos.y);
      if(boids[i] !== this && d < 150){
        steering.add(boids[i].pos);
        num++;
      }
    }
    if(num > 0){
      steering.div(num);
      steering.sub(this.pos);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    return steering
  }

  separation(boids){
    let steering = createVector();
    let num = 0;

    for(let i =0; i< boids.length; i++){
      let d = dist(
        this.pos.x, this.pos.y,
        boids[i].pos.x, boids[i].pos.y
      );

      if(boids[i] !== this && d < 150){
        let diff = p5.Vector.sub(this.pos, boids[i].pos);
        // farther it is, the lower the mult
        diff.mult(d*d);
        steering.add(diff);
        num++;
      }
    }
    if(num > 0){
      steering.div(num);
      steering.setMag(this.maxSpeed);
      steering.sub(this.vel);
      steering.limit(this.maxForce);
    }
    return steering
  }

}
