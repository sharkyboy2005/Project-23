const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var dropZone,lefty,righty;
var dropZoneBody, leftyBody, rightyBody;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	dropZone=createSprite(width/2, 650, 200, 20)
	dropZoneBody = Bodies.rectangle(width/2 , 200 , 5 , {isStatic:true});
	dropZone.shapeColor = 'red'
	World.add(world, dropZone);

	lefty=createSprite(width/2-100, 600, 20, 100)
	leftyBody = Bodies.rectangle(width/2 , 200 , 5 , {isStatic:true});
	lefty.shapeColor = 'red'
	World.add(world, lefty);

	righty=createSprite(width/2 + 100, 600, 20, 100)
	rightyBody = Bodies.rectangle(width/2 , 200 , 5 , {isStatic:true});
	righty.shapeColor = 'red'
	World.add(world, righty);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
	background(0);
  	packageSprite.x= packageBody.position.x 
  	packageSprite.y= packageBody.position.y 
	drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
    packageSprite.velocityY = 5
  }
}