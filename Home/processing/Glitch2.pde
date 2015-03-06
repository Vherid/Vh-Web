import processing.video.*;
Capture cap;
PImage img;
color c1;

void setup() {
  size(600,800);
  background(#FF5003);
  img = loadImage("image/face.png");
  img.resize(601,801);
  frameRate(3000);
}

void draw() {
  img.loadPixels();
  float rx1=random(img.width);
  int x1=int(rx1);
  int x2=0;
  float ry1=random(img.height);
  int y1=int(ry1);
  int f1=0;
  int if1=0;
  while(f1<40)
  {
    for(int f2=0;f2<20;f2++)
    {
      for(int f3=0;f3<15;f3++)
      {
        c1 = img.get(x1,y1);
        while(if1<20)
        {
          color c0 = img.get(x1,y1);
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
      triangle(x1,y1-10,x1-15,y1+15,x1+15,y1+15);
      float rz1=random(0,200);
      int z1=int(rz1);
      x1=x1+z1;
    }
    x1=0;
    y1=y1+30;
    f1=f1+10;
  }

}