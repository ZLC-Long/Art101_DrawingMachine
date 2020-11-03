let colorPicker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#e8dc8e');
  dstn = 10;
  sprng = 0.5;
  frctn = 0.5;

  // brush color picker
  colorPicker = createColorPicker('#000000');
  colorPicker.position(windowWidth / 6, height / 3);
  colorPicker;

  mX = mY = x = y = ax = ay = r = f = 0;
}

function draw() {

  if (key === '1') {
    draw1();
  }
  if (key === '2') {
    draw2();
  }
}

function draw1() {
  if (mouseIsPressed) {
    noStroke();
    for (let i = 0; i <= 8; i += .5) {
      fill(0, 0, 0, i);
      ellipse(mouseX, mouseY, 10 * i, 10 * i);
    }
  }
}

function draw2() {
  oldR = r;
  if (mouseIsPressed) {
    mX = mouseX;
    mY = mouseY;
    if (!f) {
      f = 1;
      x = mX;
      y = mY;
    }
    ax += (mX - x) * sprng;
    ay += (mY - y) * sprng;
    ax *= frctn;
    ay *= frctn;
    r = 25 - sqrt(ax * ax + ay * ay) * 0.7;

    for (i = 0; i < dstn; i++) {
      oldX = x;
      oldY = y;
      x += ax / dstn;
      y += ay / dstn;
      oldR += (r - oldR) / dstn;
      strokeWeight(oldR);
      //change brush color
      stroke(colorPicker.color())
      line(x, y, oldX, oldY);

    }
  } else if (f) {
    ax = ay = f = 0;
  }
}

function keyTyped() {
  if (key === 'c') {
    clear();
    background('#e8dc8e');

  } else if (key === 's') {
    saveCanvas('fileName', 'png');
  }
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#e8dc8e');
}
