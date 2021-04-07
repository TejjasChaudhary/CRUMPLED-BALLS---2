
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(90,545,20);
	 ground = new Ground ( 400,550,1200,25);
	 dustbin1 = new Dustbin ( 600,525,230,20);
	 dustbin2 = new Dustbin ( 480,500,20,70);
	 dustbin3 = new Dustbin ( 725,500,20,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-85});

		
	} 
}

