let array = [];
let backgroundColor = 200;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(600, 600);
  // background(backgroundColor);

  drawGrid();
  strokeWeight(5);
  noFill();

}

function draw() {

  if (mouseIsPressed) {
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    backgroundColor -= 5;
    background(backgroundColor);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);

    beginShape();
    for (let i = 0; i < array.length - 1; i++) {
      // console.log(i);
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
    // line(array[0][0], array[1][1], array[2][0], array[2][1]);
  }

}

function keyTyped() {

  // console.log(`key ${key} is being typed`);
  // console.log("key " + key + " is being typed");
  if (key === 's') {

    // console.log(`key s is being typed`)
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    // display image
    // console.log(array);
    // console.log(array[0]);
    // console.log(array[0][1]);
    background(255);

    beginShape();
    for (let i = 0; i < array.length - 1; i++) {
      // console.log(i);
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
    // line(array[0][0], array[1][1], array[2][0], array[2][1]);

  }

  return false;
}

function mousePressed() {
  // console.log("mouse pressed function");
  array = [];
  // console.log(array);
  backgroundColor = 255;
}

function drawGrid() {
  numCells = 20;

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      rect(i, j, width / numCells, height / numCells);
    }
  }
}
