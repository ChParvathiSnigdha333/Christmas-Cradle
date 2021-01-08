const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5 ;
var sling1, sling2, sling3, sling4, sling5 ;
var bgImg ;

function preload(){
  bgImg = loadImage ("bgImg.jpg")
}

function setup() {
	canvas = createCanvas(1200,500);
	engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity() ;
  let opt = {
    mouse : canvasmouse
  };
  mConstraint = MouseConstraint.create(engine,opt) ;
  World.add(world,mConstraint)
  
  pendulum1 = new PendulumBlue(240, 430);
  pendulum2 = new PendulumOrange(300,430);
  pendulum3 = new PendulumPurple(360, 430);
  pendulum4 = new PendulumYellow(420, 430); 
  pendulum5 = new PendulumPink(480, 430);
  
  sling1 = new Sling(pendulum1.body, { x: 240, y: 180 }); 
  sling2 = new Sling(pendulum2.body, { x: 300, y: 180 }); 
  sling3 = new Sling(pendulum3.body, { x: 360, y: 180 }); 
  sling4 = new Sling(pendulum4.body, { x: 420, y: 180 }); 
  sling5 = new Sling(pendulum5.body, { x: 480, y: 180 });

  roof = new Roof (215,130,00,50)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  roof.display();

  noStroke();
  fill("white")
  textSize(35)
  textFont("Algerian")
  text ("Merry Christmas" , 470,80)

  stroke("black");
  strokeWeight(1) ;
  fill("black")
  textSize(25)
  textFont("Comic San MS")
  text ("Drag the first bauble to move the christmas cradle" , 630,420)
 
}

function mouseDragged(){
  Matter.Body.setPosition (pendulum1.body, {x : mouseX , y : mouseY }) ;
}