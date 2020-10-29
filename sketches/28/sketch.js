let cols, rows;
let scl = 120;
let d = scl -20;

let angle = 0;
let patterns = [];

let xarr = [];
let yarr = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = width/ scl -2;
  rows = height/ scl -2;

  for(i= 0; i<cols; i++){
    for(j= 0; j<rows; j++){
      let p = new Pattern(i,j);
      patterns.push(p);
    }
  }
}

function draw() {
  background(30);
  noFill();
  angle = angle +0.02;

  // rows
  for(i= 0; i<cols; i++){
    let cx = i*scl + 3*scl/2;
    let cy = scl/2;

    let x = cx + d*cos((i+1)*angle-PI/2)/2;
    let y = cy + d*sin((i+1)*angle-PI/2)/2;

    strokeWeight(1);
    stroke(100);
    line(x,0,x,height);
    cir(cx,cy,x,y);

    xarr[i] = x;
  }

  // cols
  for(j= 0; j<rows; j++){
    let cx = scl/2;
    let cy = j*scl +3*scl/2;

    let x = cx + d*cos((j+1)*angle-PI/2)/2;
    let y = cy + d*sin((j+1)*angle-PI/2)/2;

    strokeWeight(1);
    stroke(100);
    line(0,y,width,y);
    cir(cx,cy,x,y);

    yarr[j] = y;
  }

  // curve
  for(n=0;n<patterns.length;n++){
    patterns[n].setCoord();
    patterns[n].display();
  }

  // point
  for(a=0;a<xarr.length;a++){
    for(b=0;b<yarr.length;b++){
    strokeWeight(5);
    point(xarr[a],yarr[b]);
    }
  }
}

function cir(cx,cy,x,y){
  strokeWeight(1);
  stroke(100);
  ellipse(cx,cy,d,d);

  strokeWeight(5);
  stroke(255);
  point(x,y);
}

class Pattern {
  constructor(row,col){
    this.path = [];
    this.row = row;
    this.col = col;
  }

  display(){
    noFill();
    stroke(250);
    strokeWeight(1);

    beginShape();
    for(i=0;i<this.path.length;i++){
      curveVertex(this.path[i].x, this.path[i].y);
    }
    endShape();
  }

  setCoord(){
    let px = xarr[this.row];
    let py = yarr[this.col];

    if(this.path.length === 0){
      this.path.push({
        x:xarr[this.row],
        y:yarr[this.col]
      });
    } else if(px!==this.path[0].x){
      if(py!==this.path[0].y){
      this.path.push({
        x:xarr[this.row],
        y:yarr[this.col]
      })
    }
    }

  }
}
  
