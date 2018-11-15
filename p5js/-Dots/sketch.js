var x = 750;
var y = 360;
var scalee = 10;
function setup (){
  createCanvas(windowWidth, windowHeight);
}
function windowResized(){
	     resizeCanvas(windowWidth, windowHeight);
}
  function keyPressed(){
    if (keyCode === UP_ARROW) {
      y -= scalee
    }
  else if (keyCode === DOWN_ARROW) {
      y += scalee
    }
  else if (keyCode === LEFT_ARROW) {
      x -= scalee
    }
  else if (keyCode === RIGHT_ARROW) {
      x += scalee
    }
//W key ti increment distance
  else if (keyCode === 87) {
        scalee += 10;
      }
//S key to decrment distance
  else if (keyCode === 83) {
          scalee -= 10;
      }
  }
  function draw(){
    ellipse(x,y,100,100);
  }
