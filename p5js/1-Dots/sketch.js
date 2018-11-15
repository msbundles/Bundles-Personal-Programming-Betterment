var x = 750;
var y = 360;
var scalee = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    y -= scalee
  } else if (keyCode === DOWN_ARROW) {
    y += scalee
  } else if (keyCode === LEFT_ARROW) {
    x -= scalee
  } else if (keyCode === RIGHT_ARROW) {
    x += scalee
  }
  //W key to increment distance
  else if (keyCode === 87) {
    scalee += 10;
    console.log(`the distance between dots = ${scalee}`)
  }
  //S key to decrment distance
  else if (keyCode === 83) {
    scalee -= 10;
    console.log(`the distance between dots = ${scalee}`)
  }
  //baclspace to clear
  else if (keyCode === 8) {
    background(255)
  }
  //enter to cleare and re center
  else if (keyCode === 13) {
    background(255)
    x = 750
    y = 360
  }
}


function draw() {
  ellipse(x, y, 100, 100);

}
