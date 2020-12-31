
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree1,ground1,stone1,boy,mango1,mango2;
function preload()
{
  boy=loadImage("Plucking mangoes/boy.png");
  tree=loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);
	//createSprite(110,330,20,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	ground1=new Ground(400,650,800,20)
	stone1=new Stone (100,330,30);


	mango1=new Mango(500,300,30);
	mango2=new Mango(480,260,40);
	mango3=new Mango(530,240,30);
	mango4=new Mango(560,260,40);
	mango5=new Mango(550,200,30);
	mango6=new Mango(590,230,30);
	mango7=new Mango(610,180,40);
	mango8=new Mango(640,210,40);
	mango9=new Mango(660,230,30);
	mango10=new Mango(610,270,40);
	mango11=new Mango(660,280,30);
	mango12=new Mango(710,270,40);

	launcherObject=new launcher(stone1.body,{x:110,y:330})
}


function draw() {
  rectMode(CENTER);
  background(255);
  ground1.display();
  textSize(15)
 text("Press Space to get a second chance to Play!",30,30)
  stone1.display();
  image (boy,75,250,200,300)
  image(tree,380,140,400,400)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
 
  launcherObject.display();
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  detectollision(stone1,mango9);
  detectollision(stone1,mango10);
  detectollision(stone1,mango11);
  detectollision(stone1,mango12);
  drawSprites();
 
}
function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
     distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:110, y:330}) 
	  launcherObject.attach(stone1.body);
	}
  }

  function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
     
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
