
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubber,hammer,stone,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground= new Ground(600,height,1200,20);

  hammer= new Hammer(600,100,70,30);
  stone= new Stone(200,380,80,80);
	ball= new Ball(700,300,20)
    
}


function draw() {

  background(0);

  Engine.update(engine);
  
  ground.display();
  hammer.display();
  stone.display();
  ball.display();
 
}



