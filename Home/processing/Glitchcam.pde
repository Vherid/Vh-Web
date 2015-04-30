PImage img;
color c1;

void setup() {
  size(640,480);
  background(100, 200, 255);
  myCapture = new Capture(this, width, height);
  myCapture.start();
  image(myCapture, 0, 0);
  if(mouseP==false) {
    noLoop();
    mouseP=true;
  }
}

void draw(){
  tri1();
  tri2();
}

// Color Average Loop.
void tri1(){
  int x1=0;
  int x2=0;
  int y1=0;
  int f1=0;
  int if1=0;
  while(f1<40)
  {
    for(int f2=0;f2<32;f2++)
    {
      for(int f3=0;f3<20;f3++)
      {
        c1 = myCapture.get(x1,y1);
        while(if1<20)
        {
          color c0 = myCapture.get(x1,y1);
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

void tri2(){
  int x1=20;
  int x2=0;
  int y1=20;
  int f1=0;
  int if1=0;
  while(f1<40)
  {
    for(int f2=0;f2<32;f2++)
    {
      for(int f3=0;f3<20;f3++)
      {
        c1 = myCapture.get(x1,y1);
        while(if1<20)
        {
          color c0 = myCapture.get(x1,y1);
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

void captureEvent(Capture myCapture) {
  myCapture.read();
}


public boolean mouseP=false;

void mousePressed() {
  if(mouseP==false) {
    noLoop();
    mouseP=true;
  }
  else {
    loop();
    mouseP=false;
  }
}