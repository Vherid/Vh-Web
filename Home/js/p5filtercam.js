var capture;

var img;
var c1;

function setup() {
  var myCanvas = createCanvas(640,480);
  myCanvas.parent('p5Container');
  background(255);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  image(capture, 0, 0);
  if(mouseP==false) {
    noLoop();
    mouseP=true;
  }
}

function draw(){
  tri1();
  tri2();
}

// Color Average Loop.
function tri1(){
  var x1=0;
  var x2=0;
  var y1=0;
  var f1=0;
  var if1=0;
  while(f1<40)
  {
    for(var f2=0;f2<32;f2++)
    {
      for(var f3=0;f3<20;f3++)
      {
        c1 = capture.get(x1,y1);
        while(if1<20)
        {
          var c0 = capture.get(x1,y1);
          c1 = lerpColor(c0,c1,.50);
          x1++;
          x2++;
          if1++;
        }
        x1-=x2;
        x2=0;
        if1=0;
        y1++;
        if1+=f3;
      }
      y1-=20;
      fill(c1);
      noStroke();
      triangle(x1,y1,x1+20,y1,x1,y1+20);
      x1=x1+20;
    }
    x1=0;
    y1=y1+20;
    f1=f1+1;
  }
}

function tri2(){
  var x1=20;
  var x2=0;
  var y1=20;
  var f1=0;
  var if1=0;
  while(f1<40)
  {
    for(var f2=0;f2<32;f2++)
    {
      for(var f3=0;f3<20;f3++)
      {
        c1 = capture.get(x1,y1);
        while(if1<20)
        {
          var c0 = capture.get(x1,y1);
          c1 = lerpColor(c0,c1,.50);
          x1--;
          x2++;
          if1++;
        }
        x1+=x2;
        x2=0;
        if1=0;
        y1--;
        if1+=f3;
      }
      y1+=20;
      fill(c1);
      noStroke();
      triangle(x1,y1,x1,y1-20,x1-20,y1);
      x1=x1+20;
    }
    x1=20;
    y1=y1+20;
    f1=f1+1;
  }
}

var mouseP=false;

function touchStarted() {
  if(mouseP==false) {
    noLoop();
    mouseP=true;
  }
  else {
    loop();
    mouseP=false;
  }
}