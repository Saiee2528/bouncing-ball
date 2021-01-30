//Engine,World,Bodies
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
 var ball;
var ground;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
//JSON style 
var option=
{
  isStatic:true
}

  ground=Bodies.rectangle(100,390,600,20,option);
  World.add(world,ground);

 var balloption=
 {
    restitution:1
 }

  ball=Bodies.circle(200,200,20,balloption);
  World.add(world,ball);
  
  
  
}


function draw() 
{
  background("green");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20);
  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20);
  


}