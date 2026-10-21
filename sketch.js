	function setup(){
    createCanvas(windowWidth, windowHeight)
// fullscreen();
background(0)
	stroke(255)
		strokeWeight(10);}

    // P_2_3_3_01
//
// Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * draw tool. shows how to draw with dynamic elements. 
 * 
 * MOUSE
 * drag                : draw with text
 * 
 * KEYS
 * del, backspace      : clear screen
 * arrow up            : angle distortion +
 * arrow down          : angle distortion -
 * s                   : save png

 */

var x = 0, y = 0;
var stepSize = 5.0;
var letters = " 1961 the Berlin Wall";
var fontSizeMin = 3;
var angleDistortion = 0.0;
var counter = 0;


function setup() {
  // use full screen size 
  createCanvas(windowWidth,windowHeight);
  background(255);
  smooth();
  cursor(CROSS);
 
  x = mouseX;
  y = mouseY;

  textAlign(LEFT);
  fill(0);

}

function draw() {
  if (mouseOver) {
    var d = dist(x,y, mouseX,mouseY);
    textFont('Georgia');
    textSize(fontSizeMin+d/2)
    var newLetter = letters.charAt(counter);;
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY-y, mouseX-x); 

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
     if (counter > letters.length-1) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize; 
    }
  }
}

function mouseOver() {
  x = mouseX;
  y = mouseY;
}

function keyTyped() {
  if (key == 's' || key == 'S') save("P_2_3_3_01.png");
}

function keyPressed() {
  // angleDistortion ctrls arrowkeys up/down 
  if (keyCode == DELETE || keyCode == BACKSPACE) background(255);
  if (keyCode == UP_ARROW) angleDistortion += 0.1;
  if (keyCode == DOWN_ARROW) angleDistortion -= 0.1; 
}

// 	function draw()	{

// 		if(mouseIsPressed){
// 	line(mouseX,mouseY,pmouseX,pmouseY);
// }

		
// 	}
// function keyPressed(){
// if(key=='r'){
// 	stroke(255,0,0)

// }
// if(key=='w') {
// stroke(255)
// }
// if(key=='b') {
// stroke(0,0,255)
// }
// if(key=='a'){
// 	stroke(random(255),random(255),random(255))
// }
// if(key=='c'){
// 	fill(random(255),random(255),random(255))
// 	ellipse(mouseX,mouseY,50,50)
// }
// }