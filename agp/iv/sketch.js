function preload() {
  //_heart = loadImage("heart.png");

}
function setup() {
  var myCanvas = createCanvas(1200, 500);
  myCanvas.parent("canvasDiv");

  fire = [];
  for (var i = 0; i < 80; i++) {
    fire.push(new Firework());
  }
   background(33,152,179);
}

function draw() {
 drawMoon();
  noStroke();
  for (i = 0; i < 10; i++) {
    drawRandomSquares();
    //  drawImages();
    
  } //*/
}
var orbitRad = 10;
var orbitDuration = 4000;
function drawMoon() {
  var ang = TWO_PI * millis() / orbitDuration;
  var x = cos(ang) * orbitRad;
  var y = sin(ang) * orbitRad;

  to = color(126, 71, 232);
  from = color(126, 255, 255);
  colorMode(RGB); // Try changing to HSB.
  inter = lerpColor(from, to, y/orbitRad);
  
  //background(inter);
  noStroke();
  push();
  translate(width / 2, height / 2);
  fill(255,10);
 // ellipse(x, y, 100, 100);
  var moonColor = (y + orbitRad) / (orbitRad * 2) * 55+200;
  fill(moonColor,1);
  var s =  random(300);
  ellipse(-x+random(4), -y+random(4),s,s);
  pop();

}

function drawRandomSquares() {
  var _x = random(0, width);
  var _y = random(0, height);
  var _s = random(50, 60);
  var _w = cos(millis()/1000 + _x);
  var _v = _x;//(_w+1)/2*width;
  //stroke(80);
  noStroke();
  
  //randomFill();
  
  // a = random(cos(millis()/1000)*55)+200;
  //  fill(random(55)+200,10,random(55)+100,255);
  if(_y < height/2+height*cos(millis()/1000)/4 ){
    fill(33, 52+_v/width*200+cos(millis())*50, 79+_v/width*200+cos(millis())*50, 10);
    ellipse(_x, _y, _s, _s);
  }else{
    //fill(_y*255/width-50+random(50) );
    //fill(79+_x/width*15, 0+_x/width*59, 0+_x/width*33,20)//fill(33, 52, 79);
    fill(33, 52+_v/width*100, 79+_v/width*100, 10);

  rect(_x, _y, _s, _s);
  }
  
    textSize(10);
      for (var i = 0; i < 8; i++) {
  
 //   text(char(random(26)+65), width/2 +  cos(millis() / 50 + i)*200, height / 2 + cos(millis() / 100 + i) * 60);
   //text(char(random(26)+65), width/2 +  cos(millis() / 50 + i)*200, height / 2 + cos(millis() / 25 + i) * 60);

}
      
/*  for (var i = 0; i < fire.length; i++) {
    fire[i].display();
  }*/
  
    
/*  for (i = 0; i < 8; i++) {
    fill(255, 0, 255 + 50 * cos(millis() / 100 + i), 255);
    rect(width / 2 + 350 * (i - 4), height / 2 - 150 + cos(millis() / 100 + i) * 100, 300, 300);
    fill(255);

    // text("HAPPY", width/2+350*(i-4),height/2-250+cos(millis()/100+i)*100);
    textSize(36);
    text("HAPPY", width / 2 + 350 * (i - 4) + 60, height / 2 - 40 + cos(millis() / 100 + i) * 100);
    text("BIRTHDAY", width / 2 + 350 * (i - 4) + 60, height / 2 + cos(millis() / 100 + i) * 100);
    textSize(60);
    text("NANA♥", width / 2 + 350 * (i - 4) + 60, height / 2 + 80 + cos(millis() / 100 + i) * 100);
  }//*/
}

function windowResized() {
 // resizeCanvas(windowWidth, windowHeight);
}

function drawImages() {
  var _x = random(0, windowWidth);
  var _y = random(0, windowHeight);
  image(_heart, _x, _y, 300, 300);
}

function Firework() {
  this.offset = random(400);
  this.time = millis() + this.offset;
  this.centerx = random(0, width) - width / 2;
  this.centery = random(0, height) - height / 2;
  this.colores = color(250, random(255), 0, 100);

  this.randomize = function() {
    this.centerx = random(0, width) - width / 2;
    this.centery = random(0, height) - height / 2;
    this.colores = color(250, random(255), 0, 100);

    a = random();
    b = 200;

    if (a < 0.33) {
      this.colores = color(0, 255, random(255), b);

    }
    if (a >= 0.33 && a < 0.66) {

      this.colores = color(0, random(255), 255, b);

    }
    if (a >= 0.66) {
      if (a < 0.75) {
        this.colores = color(random(255), 255, 0, b);
      } else {
        this.colores = color(random(255), 0, 255, b);
      }
    }
  }

  this.display = function() {
    if (this.time + 400 < millis()) {
      this.time = millis();
      this.randomize();
    }
    var amp = 400 * cos(PI / 2 - (millis() + this.offset - this.time) / 200 % PI / 2);
    //  fill(250, 5, cos(millis() / 40) * 100 + 155);
    //fill(this.colores.r, this.colores.g, this.colores.b, amp/400*255);
    fill(this.colores, 10);
    //fill(255);
    _s = 30;//amp/10;
    for (i = 0; i < 40; i++) {
      ellipse(this.centerx + width / 2 + cos(TWO_PI * i / 40) * amp, this.centery + sin(TWO_PI * i / 40) * amp + height / 2, _s, _s);
    }
  }
}

  


function randomFill() {
  a = random();
  b = 200;

  if (a < 0.33) {
    if (a < 0.15) {
      fill(250, 0, random(255), b);
    } else {
      fill(0, 255, random(255), b);
    }
  }
  if (a >= 0.33 && a < 0.66) {
    if (a < 0.5) {
      fill(250, random(255), 0, b);
    } else {
      fill(0, random(255), 255, b);
    }
  }
  if (a >= 0.66) {
    if (a < 0.75) {
      fill(random(255), 255, 0, b);
    } else {
      fill(random(255), 0, 255, b);
    }
  }
}
