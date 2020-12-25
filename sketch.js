const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1,
  b2,
  b3,
  b4,
  b5,
  b6,
  b7,
  b8,
  b9,
  b10,
  b11,
  b12,
  b13,
  b14,
  b15,
  b16,
  b17,
  b18,
  b19,
  b20,
  ground;
var ball, chain, sound, backgi;
function preload() {
  backgi = loadImage("bck.png");
}
function setup() {
  createCanvas(1800, 1100);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(900, 1080, 1800, 20);

  b1 = new Box(400, 100, 90, 90);
  b2 = new Box(500, 100, 90, 90);
  b3 = new Box(600, 100, 90, 90);
  b4 = new Box(700, 100, 90, 90);
  b5 = new Box(800, 100, 90, 90);
  b6 = new Box(900, 100, 90, 90);
  b7 = new Box(1000, 100, 90, 90);
  b8 = new Box(1100, 100, 90, 90);
  b9 = new Box(1200, 100, 90, 90);
  b10 = new Box(500, 100, 90, 90);
  b11 = new Box(600, 100, 90, 90);
  b12 = new Box(700, 100, 90, 90);
  b13 = new Box(800, 100, 90, 90);
  b14 = new Box(900, 100, 90, 90);
  b15 = new Box(1000, 100, 90, 90);
  b16 = new Box(1100, 100, 90, 90);
  b25 = new Box(600, 100, 90, 90);
  b17 = new Box(700, 100, 90, 90);
  b18 = new Box(800, 100, 90, 90);
  b19 = new Box(900, 100, 90, 90);
  b20 = new Box(1000, 100, 90, 90);
  b26 = new Box(700, 100, 90, 90);
  b27 = new Box(800, 100, 90, 90);
  b21 = new Box(800, 100, 90, 90);
  b22 = new Box(900, 100, 90, 90);
  b23 = new Box(1000, 100, 90, 90);
  b24 = new Box(900, 100, 90, 90);
  b28 = new Box(1200, 100, 90, 90);
  b29 = new Box(1100, 100, 90, 90);
  b30 = new Box(1300, 100, 90, 90);
  b31 = new Box(1400, 100, 90, 90);
  b32 = new Box(1300, 100, 90, 90);
  b33 = new Box(1200, 100, 90, 90);
  b34 = new Box(1100, 100, 90, 90);
  b35 = new Box(1000, 100, 90, 90);
  b36 = new Box(900, 100, 90, 90);

  ball = new Ball(200, 300, 250, 250);
  chain = new Chain(ball.body, { x: 300, y: 0 });
}

function draw() {
  background(backgi);
  Engine.update(engine);

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();

  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();
  b33.display();
  b34.display();
  b35.display();
  b36.display();

  ball.display();
  chain.display();

  ground.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
