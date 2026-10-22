function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20);

  //head!
  fill(204, 229, 255)
  noStroke();
  ellipse(200, 180, 140, 140);

  fill(955);
  
  //eyes!
  noStroke();
  ellipse(175, 170, 15, 25);
  ellipse(225, 170, 15, 25);
  
  push()
  fill(102, 102, 255)
  circle(170,170,15)
    circle(220,170,15)
  pop()
  
  fill(0);

  //ears!!
  noStroke();
    fill(204, 229, 255)
  circle(140, 140, 65);
 circle(260, 140, 65);

  //snout!
push()
    fill(153, 204, 255)
   noStroke();
  circle(200, 210, 65);
 pop()

  //nose & mouth
  push()
    fill(102, 102, 255)
 
  ellipse(200, 200, 25, 10);
    circle(200, 225, 15);
 pop()

  //blush
  push()
  fill(225, 204, 229)
  noStroke();
  ellipse(200, 180, 40, 10);

  fill(225, 204, 229)
  noStroke();
  ellipse(150, 190, 20, 10);

   fill(225, 204, 229)
  noStroke();
  ellipse(250, 190, 20, 10);
  (pop)

  text("i really like bears :'D ",10,20);
}
