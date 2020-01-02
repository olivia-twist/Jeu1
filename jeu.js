var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

var interval = setInterval(draw, 20);

//rayon de la balle
var ballRadius = 6;

//paddle
var paddleHeight = 6;
var paddleWidth = 55;
var paddleX = (canvas.width-paddleWidth)/2;

//move paddle RED
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight"){
    rightPressed = true;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft"){
    leftPressed = true;
  }
}

function keyUpHandler(e){
  if(e.key == "Right" || e.key == "ArrowRight"){
    rightPressed = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft"){
    leftPressed = false;
  }
}

//move paddle BLUE
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight"){
    rightPressed = true;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft"){
    leftPressed = true;
  }
}

function keyUpHandler(e){
  if(e.key == "Right" || e.key == "ArrowRight"){
    rightPressed = false;
  }
  else if(e.key == "Left" || e.key == "ArrowLeft"){
    leftPressed = false;
  }
}

//change color Ball
function getColor() {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8)
  )
}
// ball color style
function setBall() {
  var ballColor = getColor();
  document.body.style.ball = ballColor;
}
// function on click
document.body.draw = function(e) {
  if (e.keyCode == 32) {
    setBall();
  }
}
//
function drawBall() {
  //drawing code
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle2() {
  ctx.beginPath();
  ctx.rect(paddleX, 0, paddleWidth, paddleHeight);
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.closePath();
}

  function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawPaddle2();

  //rebondir sur les murs RED
  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
     dx = -dx;
  }

  if(y + dy < ballRadius) {
    dy = -dy;
  }
  else if(y + dy >canvas.height-ballRadius){
    if(x > paddleX && x < paddleX + paddleWidth){
      dy = -dy;
    }
    else{
    alert("PERDU ROUGE");
    document.location.reload();
    clearInterval(interval); //Needed for Chrome to end game
    }
  }

//rebondir sur les murs blue
if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
   dx = -dx;
}

if(y + dy < ballRadius) {
  dy = -dy;
}
else if(y + dy >canvas.height-ballRadius){
  if(x > paddleX && x < paddleX + paddleWidth){
    dy = -dy;
  }
  else{
  alert("PERDU BLEU");
  document.location.reload();
  clearInterval(interval); //Needed for Chrome to end game
  }
}

//move paddle red
  if(rightPressed){
    paddleX += 7;
    if(paddleX + paddleWidth > canvas.width){
      paddleX = canvas.width - paddleWidth;
    }
  }
  else if(leftPressed){
    paddleX -= 7;
    if(paddleX  < 0){
      paddleX = 0;
    }
  }
  x += dx;
  y += dy;
}
//move paddle blue
