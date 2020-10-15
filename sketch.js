let array = [];


function setup() {
  createCanvas(600, 600);
  background(220);

  strokeWeight(5);
  noFill();

}

function draw() {

  if (mouseIsPressed == true) {
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    background(0);
    array.push([mouseX, mouseY]);
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
