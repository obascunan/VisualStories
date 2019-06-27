var system;

function setup() {
  
     var myCanvas = createCanvas(1200, 500);
  myCanvas.parent("canvasDiv");
  system = new ParticleSystem(createVector(width / 2, 50));
  
}

function windowResized() {
 // resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(51);

 // circleBackground();
  squareGrid();
/*
  system.addParticle();
  system.addParticle();
  system.addParticle();
  system.addParticle();
  system.addParticle();
  system.addParticle();
  system.addParticle();
  system.addParticle();
  system.addParticle();
  system.run();
  //*/
  // drawHorizontalLine();
  //  drawRandomSquares();
  // drawRainLine();

  drawText();
  // circleRandomFront();
}

function circleRandomFront() {
  noStroke();
  fill(100);
  var xDistance = height / 12;
  var angle = TWO_PI * random(0, 1);
  for (var x = 0; x < width; x += xDistance) {
    for (var y = 0; y < height; y += xDistance) {
      if (random() > 0.1) {
        fill(x / width * 60 + sin(millis() / 1000 + y / height) * 30 + 10);
        rect(x, y, xDistance + 1, xDistance + 1);
      }
    }
  }
}

function circleBackground() {
  //stroke(255);
  noStroke();
  fill(100);
  //gridDistance = 15 + abs(sin(millis()/600));
  var xDistance = height / 12;
  var angle = TWO_PI * random(0, 1);

  // this.position = createVector(width / 2 + cos(angle) * 300, height / 2 + sin(angle) * 300);
  //  this.velocity = createVector(-cos(angle), -sin(angle));
  //  this.mainColor = color(30 * sin(angle) + 175, 180, 50 * cos(angle) + 205);
  for (var x = 0; x < width; x += xDistance) {
    for (var y = 0; y < height; y += xDistance) {
      //strokeWeight(random(0, 0.5));
      //fill(100 + sin(millis() / 200 + y + x / 100) * 50);
      // fill( x/width * 100 + sin(millis()/1000 )*100,  x/width * 100 + 155, y/height * 100 + 155, 40);
      // fill(x / width * 60 + cos(millis() / 100 + y/height) * 30+10+cos(x/width*TWO_PI)*100+sin(y/height*TWO_PI)*100, 40);
      fill(x / width * 60 + sin(millis() / 1000 + y / height) * 30 + 10);

      rect(x, y, xDistance + 1, xDistance + 1);
      //    line(0, y, windowWidth, y);
    }
  }
}

var randomChars = "ABCDEFGHIJKabcdefghijk";
var word01 = "C  r  e  a  t  i  v  e    •    T  h  i  n  k  e  r    •     C  o  d  e  r";
var currentWord = "";
var currentLetter = 0;
var ccc = 0;

function getCaptionText() {
  // if (ccc > 1){
  ccc = 0;
  currentLetter++;
  //}
  currentWord = word01.substring(0, currentLetter) + "|"; // + randomChars.charAt(floor(random(0, randomChars.length )));

  ccc++;
  return currentWord;
}

function drawText() {
  textAlign(CENTER);
  textSize(14);

  /* if(random() > 0.9){
    _c = color('black');
    fill(_c);
    stroke(_c);
  text("O R L A N D O   B A S C U Ñ Á N", windowWidth / 2, windowHeight / 2);
    }//*/
  _c = 255;
 
 _rr = random(100,120);
   fill(255);
  noStroke()
  textFont("Lato");
  // text("O r l a n d o  B a s c u ñ á n", windowWidth/2, windowHeight/2);



  text("O R L A N D O   B A S C U Ñ Á N", width / 2, height / 2+57);
  //  text("O R L A N D O   B A S C U Ñ Á N", windowWidth / 2 + sqrt( (windowWidth/2-mouseX)/windowWidth)*60, windowHeight / 2 + (windowHeight/2-mouseY)/windowHeight*60);


  textSize(30);
  textFont("Times");
  // textAlign(LEFT);
  var cText = getCaptionText();
  var cWidth = textWidth(word01);
  //text(cText, windowWidth / 2 - cWidth/2, windowHeight / 2 + 40);
 // fill(random(10));
  text("K  i n  e t  i c  s        o     f          i    m    p   e  r   m   a   n   e   n  t          l    a    n   d  ", width / 2, height / 2);
} 

function squareGrid() {
  //stroke(255);
  noStroke();
  fill(100);
  //gridDistance = 15 + abs(sin(millis()/600));
  var xDistance = 120;
  for (var x = 0; x < width; x += xDistance) {
    for (var y = 0; y < width; y += xDistance) {
      //strokeWeight(random(0, 0.5));
      fill(155 + cos(millis() / 600 + y ) * 100, 10);
      var r =  cos(millis() / 600 + y + x/1200) * 60
      rect(x+10+random(2), y+30+random(2), r, r);
      //    line(0, y, windowWidth, y);
    }
  }
}

function drawRandomSquares() {
  var _x = random(0, width);
  var _y = random(0, height);
  var _s = random(5, 100);
  stroke(80);
  rect(_x, _y, _s, _s);
}

function drawHorizontalLine() {
  var y = random() * height;
  stroke(y / height * 50 + 105);
  line(0, y, width, y);
}

function drawRainLine() {
  var x = floor(random(10)) * width / 10;
  var y = floor(random(10)) * height / 10;
  stroke(126);
  line(x, y, x + 100, y + 100);
}
// A simple Particle class
var Particle = function(position) {

  this.acceleration = createVector(0, 0); // createVector(0, 0.05);


  var angle = TWO_PI * random(0, 1);

  this.position = createVector(width / 2 + tan(angle) * 200, height / 2 + tan(angle) * 100);
//this.position = createVector(width / 2 + cos(angle) * 300, height / 2);

  if (random() > 0.99) {
    this.lifespan = 120.0;
    this.velocity = createVector(cos(angle), sin(angle) * .5);
  } else {
    this.lifespan = 90.0 + random(90);
    this.velocity = createVector(-cos(angle) * .6, -sin(angle) * .5);
  }
  this.size = random(1, 5);
 // if (random() < 0.8) {
  //  this.mainColor = color(200);
  //} else {
    this.mainColor = color(60 * sin(angle) + 175, 180, 50 * cos(angle) + 205);
  //}
  //this.mainColor = color(60 * sin(angle) + 175, 180, 50 * cos(angle) + 205);
  // this.velocity = createVector(random(-1, 1), random(-1, 0));
  //position.copy();

};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function() {

  // if(this.position.y > windowHeight/2 && this.position.y < windowHeight/2 + 80){
  //    this.acceleration = createVector(0.3,0.3);
  //  }

  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};

// Method to display
Particle.prototype.display = function() {
  //stroke(200, this.lifespan);
  //strokeWeight(2);
  noStroke();
  //this.mainColor.a = this.lifespan;
  //  fill(red(this.mainColor), green(this.mainColor), blue(this.mainColor), this.lifespan * 3);
  fill(red(this.mainColor), green(this.mainColor), blue(this.mainColor), sin(this.lifespan / 90 * PI) * 105);
  //  fill(120, this.lifespan * 2);
  //  fill(127, this.lifespan/50);
  var size = this.size; //cos(millis()/100+this.position.y/height)*5+10;// + randomGaussian(this.position.y/height);//*sin(millis()/100+this.position.x/width)*5 + 15;
  ellipse(this.position.x, this.position.y, size, size);
};

// Is the particle still useful?
Particle.prototype.isDead = function() {
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length - 1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};