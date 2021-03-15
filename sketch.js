const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var engine, world;

var paper;
var ground;
var dustbin;


function preload(){
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(200,450,50);
   ground = new Ground(width/2,670,width,20);
    dustbin = new Dustbin(1200,559);


    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes: false
      }
    });
  
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  
  paper.display();
  dustbin.display();
  ground.display();
  

 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:150, y:-150});
  }
}