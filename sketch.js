var tower,towerImg
var player,playerAnimation

function preload(){

  towerImg=loadImage("tower.png")
  playerAnimation=loadAnimation("ani1.png","ani2.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight-122);

  tower=createSprite(203,displayHeight-365,84,167)
  tower.addImage("tower",towerImg)

  player=createSprite(227,displayHeight-510)
  player.addAnimation("player",playerAnimation)
}

function draw() {
  background("black");  
  drawSprites();
  zombies()

  if(keyDown("space")){

    var arrow=createSprite(player.x,player.y)
    arrow.velocityX=5
  }
}

function zombies(){

  if(frameCount % 160 === 0){
   var zombie=createSprite(displayWidth,displayHeight-238);
   zombie.velocityX=-3;
   zombie.y=Math.round(random(displayHeight-200,displayHeight-600));
   zombie.scale=0.5
    
  }
}