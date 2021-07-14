var seaImage,shipImage;
var sea,ship;

function preload(){
  shipImage= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage=loadImage("sea.png");

}



function setup(){
  createCanvas(400,400);
  
  //moving sea
  sea=createSprite(400,200,400,400);
  sea.addImage(seaImage);
  sea.scale=0.3;
  sea.velocityX=-5;

  //create ship
  ship=createSprite(113,200,30,30);
  ship.addAnimation("shipImage",shipImage);
  ship.scale=0.3;

}



function draw() {
  background("blue");
  
  //code to reset the sea
  if(sea.x<0){
    sea.x=sea.width/10;
  }


  drawSprites();
}