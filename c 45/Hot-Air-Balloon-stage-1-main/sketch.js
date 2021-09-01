var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg;
var gameState="play";


function preload(){
bgImg = loadImage("assets/bg.png");
o1=loadImage("assets/obsTop1.png");
o2=loadImage("assets/obsTop2.png");
o3=loadImage("assets/obsBottom1.png");
o4=loadImage("assets/obsBottom3.png");



balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
createCanvas(1200,400)
//background image
bg = createSprite(500,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;


topGround = createSprite(200,0,800,10);
topGround.visible =false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

Obstacle1group=createGroup();
Obstacle2group=createGroup();




}

function draw() {
  
  background("black");
  if(gameState==="play"){
    if(keyDown("space")) {
      balloon.velocityY = -6 ;
      
    }
    
    

    //adding gravity
     balloon.velocityY = balloon.velocityY + 0.8;
     Obstacle1();
     Obstacle2();

     if(balloon.isTouching(Obstacle1group)){
       gameState="END"
     }
     if(balloon.isTouching(Obstacle2group)){
       gameState="END"
     }
    
  }
  balloon.collide(bottomGround);
  drawSprites();
  if(gameState==="END"){
   Obstacle1group.setVelocityXEach(0);
   Obstacle1group.setLifetimeEach(-1);
   Obstacle2group.setVelocityXEach(0);
   Obstacle2group.setLifetimeEach(-1);

   balloon.x=50;
   balloon.y=200;
   textSize(40);
   fill("black");
   text("G A M E  O V E R",440,200);


  }
        
          //making the hot air balloon jump


          
   
          balloon.bounceOff(topGround);


}
function Obstacle1(){
  if(frameCount%100===0){

  

  var obstacle=createSprite(1200,10,1,1);
  obstacle.y=random(10,100);
  obstacle.velocityX=-3
  var rand=Math.round(random(1,2));
  switch(rand){
    case 1: obstacle.addImage(o1);
    break;
    case 2:obstacle.addImage(o2);
    break;
    default : break;
  }
  obstacle.scale=0.08;
  Obstacle1group.add(obstacle);


  }

  
  
}

function Obstacle2(){
  if(frameCount%230===0){

  

  var obstacle=createSprite(1200,300,1,1);
  
  obstacle.velocityX=-3
  var rand=Math.round(random(1,2));
  switch(rand){
    case 1: obstacle.addImage(o3);
    break;
    case 2:obstacle.addImage(o4);
    break;
    default : break;
  }
  obstacle.scale=0.1;
  Obstacle2group.add(obstacle);


  }

  
  
}
