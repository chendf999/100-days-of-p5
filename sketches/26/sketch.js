let tree = [];
let leaves = [];
let angle;

function setup() {
  createCanvas(windowWidth, windowHeight);

  angle = PI/8;

  let a = createVector(width/2, height);
  let b = createVector(width/2, height-80);

  tree[0] = new Branch(a,b);
}

function draw() {
  background(30);

  fill(150);
  textAlign(CENTER, CENTER);
  textSize(16);
  text('Click to create a new tree!', 0.5*width, height-30);

  stroke(255);

  if(tree.length < 300){

    for(let i=tree.length-1; i>=0; i--){
      if(!tree[i].finished){
        tree.push(tree[i].branchA());
        tree.push(tree[i].branchB());
      }

      tree[i].finished = true;

      if(i > sq(4)){
        let leafA = new Leaf(tree[i].branchA().end);
        let leafB = new Leaf(tree[i].branchB().end);
        leaves.push(leafA, leafB);
      }
    }
  }

  for(let i=0; i< tree.length; i++){
    tree[i].display();
  }

  for(let i=0; i< leaves.length; i++){
    leaves[i].display();
  }
}

class Branch {
  constructor(start, end){
    this.start = start;
    this.end = end;
    this.finished = false;
  }

  display(){
    stroke(150,100,20);
    line(this.start.x, this.start.y, this.end.x, this.end.y);
  }

  branchA(){
    let dir = p5.Vector.sub(this.end, this.start).mult(random(0.5,1));

    dir.rotate(angle-random(0.3))
    this.nextA = p5.Vector.add(this.end, dir);

    let branchA = new Branch(this.end, this.nextA);
    return branchA
  }

  branchB(){
    let dir = p5.Vector.sub(this.end, this.start).mult(random(0.5,1));

    dir.rotate(-angle+random(0.3));
    this.nextB = p5.Vector.add(this.end, dir);

    let branchB = new Branch(this.end, this.nextB);
    return branchB
  }
}

class Leaf {
  constructor(v){
    this.pos = createVector(v.x, v.y);
    this.vel = createVector(0,3);
    this.acc = createVector(0,random(0.5,1));
  }

  display(){
    fill(250,100,120,90);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 10,10);
  }
}

function mousePressed(){
  tree = [];
  leaves = [];
  setup();
}
  
