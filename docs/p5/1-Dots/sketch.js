var x = 750;
var y = 360;
var scalee = 10;
var count = 0;
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
    scalee += 10;
    console.log(`the distance between dots = ${scalee}`);
  } else if (keyCode === 83) {
    //S key to decrement distance
    scalee -= 10;
    console.log(`the distance between dots = ${scalee}`);
  } else if (keyCode === 8) {
    //backspace to clear
    background(255);
  } else if (keyCode === 13) {
    //enter to clear and re center
    background(255);
    x = 750;
    y = 360;
  } else if (keyCode === 50) {
    count++;
  } else if (keyCode === 49) {
    count--;
  }
  
}
function draw() {
  ellipse(x, y, 100, 100);
  switch (count) {
    case 0:
      fill(255);
      break;
    case 1:
      fill(111);
      break;
  }
  if(count == -1){
    count =0;
  }
  if(count>1){
    count =1;
  }
}
