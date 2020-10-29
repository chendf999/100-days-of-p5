let arr = [2334, 3435, 4573, 1345, 4234, 3234]

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(30);
  createChart(arr);
}

function createChart(data){
  let sum = 0;
  for(i=0; i< data.length; i++){
    sum = sum + data[i]
  }

  let start = 0;

  for(j=0; j< data.length; j++){
    let color = map(j, 0, data.length, 50, 200);
    fill(color);
    noStroke();

    arc(200, height/2, 200, 200, start, start + 2*PI*data[j]/sum);
    start = start + 2*PI*data[j]/sum;

    rectMode(CENTER);
    let h = 200*PI*data[j]/sum

    translate(400,-height/2+80);
    rect(50*j, height-h/2, 30, h);
    translate(-400,height/2-80);
  }
}
