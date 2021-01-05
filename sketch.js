
var monkey , monkey_running,ground;
var banana ,bananaImage,bananaImg, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0;
var spawnBanana,spawnRock;
var invisibleGround

function preload(){
 

  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 bananaImg = loadImage("banana2.png");
}

function setup() {
  createCanvas(600, 200);
monkey=  createSprite(50,160,20,50);
monkey.addAnimation("running",monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(200,180,400,20);
 ground.velocityX = -6
ground.x = ground.width/2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  obstacleGroup = createGroup();
  foodGroup = createGroup();
  
  monkey.setCollider("rectangle",0,0,400,monkey.height);
  monkey.debug = true;
}


function draw() {
  background("white");
  
text("Score: "+ score, 500,50);
  
   score = score + Math.round(frameCount/60);
  //if(keyDown("space")) {
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
  }
  
 monkey.velocityY = monkey.velocityY + 0.8;
    
   
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  spawnRock();
  
    spawnBanana();
    
     if(monkey.isTouching(foodGroup)){
     foodGroup.destroyEach();
 }
    
    
  monkey.collide(ground);
  
  drawSprites();
  
  } 

function spawnBanana(){
  if (frameCount % 100 === 0) {
    banana = createSprite(600,165,10,40);
   banana.velocityX = -6
    banana.addImage(bananaImage);
    banana.scale = 0.05
    //banana.setLifetime = -1;
    banana.y = Math.round(random(80,120));
    foodGroup.add(banana);
  }
}

function spawnRock(){
if(frameCount%100===0){
  obstacle = createSprite(400,165,10,40);
  obstacle.velocityX = -4;
  obstacle.addImage(obstacleImage);
  //obstacle.setLifetime = -1;
  obstacleGroup.add(obstacle);
  obstacle.scale = 0.09;
}
}