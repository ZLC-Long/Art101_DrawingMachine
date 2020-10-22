// let backgroundColor = 200;
// let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 30, 133);


}

function draw() {

  background(220, 50, 133, 5);
  strokeWeight(strokeWidth);

  noiseOffset += 0.01;
  strokeWidth = noise(noiseOffset) * 100;

  stroke(map(mouseX, 0, 600, 0, 255, true))
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);

  // if (mouseIsPressed == true)
  // {
  //   // backgroundColor -= 2;
  //   // background(backgroundColor);
  //   line(mouseX, mouseY, pmouseX, pmouseY);
  //   array.push([mouseX, mouseY]);
  //
  //   beginShape();
  //   for (let i = 0; i < array.length - 1; i++) {
  //     // console.log(i);
  //     // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  //     curveVertex(array[i][0], array[i][1])
  //   }
  //   endShape();
  //   // line(array[0][0], array[1][1], array[2][0], array[2][1]);
  // }

}

function keyTyped() {

  // console.log(`key ${key} is being typed`);
  // console.log("key " + key + " is being typed");
  if (key === 's') {

    // console.log(`key s is being typed`)
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    // clear the image
    clear();
  }

  return false;
}

// function mousePressed(){
//   // console.log("mouse pressed function");
//   array = [];
//   console.log(array);
//   backgroundColor = 255;
// }
