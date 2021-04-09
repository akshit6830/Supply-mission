
var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 20,20);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	box2 = new Box(500,630,10,100,"red");
	box3 = new Box(299,630,10,100,"red");
	box1 = new Box(400,680,210,10,"red");

	ground= new Box(400,height-10,width,10,"grey");
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

	
  if(keyDown(DOWN_ARROW)) {
	Matter.Body.setStatic(packageBody,false);
	}	
   if (keyDown(LEFT_ARROW)) {
	  helicopterSprite.x -= 20 ;
	  Matter.Body.translate(packageBody , {x : -20 , y: 0})
   }
   if (keyDown(RIGHT_ARROW)) {
	helicopterSprite.x += 20 ;
	Matter.Body.translate(packageBody , {x : +20 , y: 0})
 }	
 	ground.display();
	box2.display();
	box3.display();
	box1.display();


  Engine.update(engine);
}