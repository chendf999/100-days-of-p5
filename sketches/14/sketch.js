let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  frameRate(15);
}

function draw() {

  translate(width/2,height/2);

  background(0,0,0,5);

  stroke(50,100,180);
  line(x1(t),y1(t),x2(t),y2(t));

  stroke(100,50,120);
  line(x1(t),y1(t),x2(t*2),y2(t+150));
  t = t + 1;
}

function x1(t){
  return sin(t/10)*100 + sin(t/20)*125 + sin(t/30)*80;
}

function y1(t){
  return cos(t/20)*90 + cos(t/10)*100 + cos(t/15)*120;
}

function x2(t){
  return sin(t/10)*90 + sin(t/20)*75 + sin(t/30)*140;
}

function y2(t){
  return cos(t/30)*120 + cos(t/15)*60 + cos(t/20)*90;
}
