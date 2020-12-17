const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6
var box7,box8,box9
var polygon, slingShot, polygonImage
var ground;

function preload() {
 
    polygonImage = loadImage("polygon.png")
}

function setup(){

createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(350,200,200,20);

  box1 = new Block(350,190,30,30);
  box2 = new Block(340,190,30,30);
  box3 = new Block(360,190,30,30);
  box4 = new Block(370,190,30,30);
  box5 = new Block(330,190,30,30);
  box6 = new Block(350,160,30,30);
  box7 = new Block(330,160,30,30);
  box8 = new Block(370,160,30,30);
  box9 = new Block(350,120,30,30);
  
  

  polygon = new Polygon(50,200,20);

  slingShot = new SlingShot(polygon.body,{x:100,y:100});
}

function draw() {

    background(200,200,200);  
    Engine.update(engine);
    strokeWeight(4);
  
    ground.display();
    polygon.display();
    slingShot.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    drawSprites();

}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  }
  
  
  function mouseReleased(){
    slingShot.fly();
  }