var bg,bgImg

function preload(){
bgImg= loadImage("alien.png") 
}

function setup() {
  createCanvas(600, 600);
  bg=createSprite(100,100,600,600)
  bg.addImage(bgImg)
  
}

function draw() {
  
  background(255);
  
  
 
  drawSprites();
}
