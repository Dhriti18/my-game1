
var troopImg,enemyImg,BGM,BGM2;
var Monster1,Monster2,Monster3;
var troop1,troop2,troop3,troop4,troop5,troop6,
troop7,troop8,troop9,troop10,enemy,enemy2,enemy3,enemy4;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
var engine,world;

function preload() {
  troopImg=loadAnimation("Images/troop1.png","Images/troop2.png", "Images/troop3.png",
   "Images/troop4.png","Images/troop5.png","Images/troop6.png");
   enemyImg=loadAnimation("Images/enemy1.png","Images/enemy2.png","Images/enemy4.png");
   BGM=loadImage("Images/stage 1.png");
   BGM2=loadImage("Images/background.jpg");
   Monster1=loadAnimation("Images/greenGoblin1.png","Images/greenGoblin2.png","Images/greenGoblin3.png","Images/greenGoblin4.png",)
   
   Monster2=loadAnimation("Images/GreyM1.png","Images/GreyM2.png","Images/GreyM3.png","Images/GreyM4.png");
   Monster3=loadAnimation("Images/redMonster1.png")

}
function setup() {
  createCanvas(1200,400);

engine=Engine.create();
bgmi=createSprite(600,200,1200,800);
bgmi.addImage(BGM);
world=engine.world;
troop1=new Troop(110,150)
gm=new Ground(100,650);
enemy=new Enemy(280,150)
enemy2=new Enemy(250,150)
enemy3=new Enemy(220,150)
enemy4=new Enemy(190,150)
mons1=createSprite(300,250,20,10);
mons1.addAnimation("jiiiq",Monster1)
mons1.scale=0.8;
mons2=createSprite(400,250,20,10);

mons2.addAnimation("jiiiqq",Monster2)
mons2.scale=0.8;
mons3=createSprite(200,250,20,10);
mons3.addAnimation("jiiiqr",Monster3)
mons3.scale=0.8;

}

function draw() {
  Engine.update(engine);
  bgmi.velocityX=-4
 
  drawSprites();
  //background.addImage("BGM") ;
  troop1.display();
  enemy.display();
enemy2.display();
  enemy3.display();
  
  enemy4.display();

  //text("X : " + mouseX + "Y : " + mouseY , mouseX , mouseY);
 

}
