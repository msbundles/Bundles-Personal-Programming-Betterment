var x = 750;
var y = 360;
var scalee = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    y -= scalee;
  } else if (keyCode === DOWN_ARROW) {
    y += scalee;
  } else if (keyCode === LEFT_ARROW) {
    x -= scalee;
  } else if (keyCode === RIGHT_ARROW) {
    x += scalee;
  } else if (keyCode === 16) {
    //shift key to re sed position
    x = 750;
    y = 360;
  } else if (keyCode === 87) {
    //W key to increment distance
    scalee += 5;
    console.log(`the distance between dots = ${scalee}`);
  } else if (keyCode === 83) {
    //S key to decrment distance
    scalee -= 5;
    console.log(`the distance between dots = ${scalee}`);
  } else if (keyCode === 8) {
    //baclspace to clear
    background(255);
  } else if (keyCode === 13) {
    //enter to cleare and re center
    background(255);
    x = 750;
    y = 360;
  }
}
function draw() {
  ellipse(x, y, 100, 100);
}
