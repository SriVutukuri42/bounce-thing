const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var up;
var ri;
var ground;
var left;
var right;
var top_wall;
var ball;


function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 390, 400, 20);
  right = new Ground(390, 200, 20, 400);
  left = new Ground(10, 200, 20, 400);
  top_wall = new Ground(200, 10, 400, 20);

  var options = { restitution: 1 };
  ball = Matter.Bodies.circle(200, 200, 20, options)
  World.add(world, ball)

  up = createImg("up.png")
  up.position(50, 50)
  up.size(50, 50)
  up.mouseClicked(verticalForce)

  ri = createImg("right.png")
  ri.position(50, 100)
  ri.size(50, 50)
  ri.mouseClicked(horizontalForce)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x, ball.position.y, 20, 20)

  Engine.update(engine);
}
function verticalForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: -0.05 })
}

function horizontalForce() {
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.05, y: 0 })
}
