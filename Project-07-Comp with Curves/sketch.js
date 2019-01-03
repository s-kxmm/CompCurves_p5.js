// Sophia S Kim
// Section C 1:30
// sophiaki@andrew.cmu.edu 
// Project-07-Composition with Curves

var nPoints = 200; 

function setup() {
  createCanvas(480, 480);
}

function draw() {
  background(0);
  
  //middle green diamond 
  push();
  translate(width/2, height/2);
  noFill();
  strokeWeight(2);
  stroke(35, 255, 0);
  drawAstroid();
  pop();

  //right blue diamond
  push();
  translate((width/2) + 10, height/2);
  noFill()
  stroke(35, 0, 255);
  drawAstroid();
  pop();

  //left red diamond
  push();
  translate((width/2) - 10, height/2);
  noFill()
  stroke(255, 0, 0);
  drawAstroid();
  pop();
}

  //atroid move based on mouseX and mouseY 
  // Asteroid - http://mathworld.wolfram.com/Astroid.html
function drawAstroid() {
  var x; //xvalue for astroid curve
  var y; //yvalue for astroid curve
  var a; //for mouse X movement 
  var b; //constrains mouseY values 0 to 300

  a = mouseX; 
  b = constrain(mouseY, 0, 300);

  beginShape(); 
  for(var i = 0; i < nPoints; i++) {
    var t = map(i, 0, nPoints, 0, TWO_PI);
    //for degrees based on i 

    x = 3 * a * (cos(t)) + b * (cos(3*t)); 
    y = 3 * a * (sin(t)) - b * (sin(3*t));
    vertex(x,y);
  } 
  endShape();
}