
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,bodies;
var ground,sand,iron,hammer;
var stone;
var rubber;
//var sand;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);

	stone = new Stone(600,200,70,70);

	sand1 = new Sand(200,200,5);
	sand2 = new Sand(215,200,5);
	sand3 = new Sand(220,200,5);
	sand4 = new Sand(230,200,5);
	sand5 = new Sand(240,200,5);
	sand6 = new Sand(250,200,5);
	sand7 = new Sand(260,200,5);
	sand8 =  new Sand(270,200,5);
	sand9 = new Sand(280,200,5);
	sand10 = new Sand(290,200,5);

	iron = new Iron(400,200,100,50);

	hammer = new Hammer(100,100,100,30);
	
  rubber = new Rubber(650,50,50);

	Engine.run(engine);
  
}


function draw() {
	background(0);
	//background();
	//drawSprites();
  rectMode(CENTER);
  
  ground.display();
  stone.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();

  iron.display();

  hammer.display();

  rubber.display();
  
 
}



