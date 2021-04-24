
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup

var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas (600,200)

 //create a monkey sprite
 monkey=createSprite(50,165,20,20);
 monkey.addAnimation("monkey",monkey_running) ;
monkey.scale=0.1; 
  
 ground=createSprite(5,200,1200,10);   

  //obstacleGroup=createGroup();
//bananaGroup=createGroup();
 
}


function draw(){
//set the background colour
 background("green") ;
  // moving ground
    ground.velocityX = -3 

    if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
     
    }
  
 // if(bananaGroup.isTouching("monkey")){
 //bananaGroup.destroyEach();
 // }
  
  
  
       //add gravity
   monkey.velocityY = monkey.velocityY +0.8;
      
monkey.collide(ground);
 
//obstacleGroup=createGroup();
//bananaGroup=createGroup();   
 
 //spawn the clouds
    spawnbanana();
  
    //spawn obstacles on the ground
    spawnObstacle(); 
  
  
  
drawSprites() }




function spawnbanana() {
  //write code here to create a banana
  if (frameCount % 80 === 0){
    var banana = createSprite(400,100,40,10);
    banana .addImage("banana" , bananaImage);
     banana.y = Math.round(random(40,100));
    banana .scale = 0.1;
    banana .velocityX = -2;
    
    banana.lifetime =165;
  }

 
}

function spawnObstacle() {
  //write code here to create a banana
  if (frameCount % 250 === 0){
    var obstacle = createSprite(400,200,40,10);
    obstacle .addImage("obstacle" , obstacleImage);
    obstacle .scale = 0.1;
    obstacle .velocityX =- 1;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));

obstacle.scale = 0.3;
    obstacle.lifetime = 360;

  }
}   
