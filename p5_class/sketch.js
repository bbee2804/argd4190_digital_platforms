let colors = []
let sizes = []
let columns = 16;
  let rows = 10;
  let cellWidth 
  let cellHeight 
function setup() {
  createCanvas(1000, 700);
  // noLoop();
  cellWidth = width / columns;
  cellHeight = height / rows;
  strokeWeight(.1);
  for (let c = 0; c < columns; c++) {
    let flowerClr = []
    let flowerSize = []
    for (let r = 0; r < rows; r++) {
      // let flowerRBG = [rand]
      flowerClr.push([random(995), random(755), random(455)])
      flowerSize.push(random(30, 20))
    }
    colors.push(flowerClr)
    sizes.push(flowerSize)
  }
  console.log(colors[9][9])
}

function draw() {
  background(0, 95, 80);
  

 columns = 16;
  rows = 12;


  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const x = c * cellWidth + cellWidth / 2;
      const y = r * cellHeight + cellHeight / 2;

      drawFlower(x, y, sizes[c][r], colors[c][r]);
    }
  }
}

function drawFlower(x, y, size,c) {
  // const flowerSize = random(size * .5, size * .95);
  const petalSize = size//flowerSize / 2;
  const spacing = petalSize / 2
  ;
  push()
  translate(x, y)
  rotate(frameCount * 0.01)
  // fill(random(955), random(755), random(255));
  circle( - spacing,  - spacing, size);
  circle( + spacing,  - spacing, size);
  circle( - spacing,  + spacing, size);
  circle( + spacing,  + spacing, size);
  pop()
  fill(c)
  circle(x, y, size);
  
}