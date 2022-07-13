var groundImage,ground
var trexAnimation

function preload() {

trexAnimation=loadAnimation("trex1.png","trex3.png","trex4.png")
groundImage=loadImage("ground2.png")
}

function setup() {
createCanvas(600,200)
trex=createSprite(30,150,20,20)
trex.addAnimation("trexLable",trexAnimation)
trex.scale=0.5
ground=createSprite(300,185,600,10)
ground.addImage("groundLabel",groundImage)
}

function draw () {
background("black")
if(keyDown("space")) {
  trex.velocityY=-10
}
trex.velocityY=trex.velocityY+1
trex.collide(ground)
drawSprites()
}