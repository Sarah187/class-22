const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world
var ground
var ball

function setup() {

  createCanvas(500,500);
  engine = Engine.create();
  world = engine.world;
  var ballProperty={
    restitution: 1.1
  }
  ball = Bodies.circle(250,200,20,ballProperty);
  World.add(world,ball);
  //Matter.Bodies.rectangle(x, y, width, height, [options])
  var groundProperty = {
    isStatic: true,
  }
  ground = Bodies.rectangle(250,480,500,20,groundProperty);
  World.add(world,ground);
  console.log (ground.position);

}

function draw() {

  background(10); 
  Engine.update(engine); 
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,500,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}