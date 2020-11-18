
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;

var ground,division1,division2,plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,engine,world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(240,550,470,10);
  division1=new Ground(470,310,10,490);
  division2=new Ground (10,310,10,490);
  plinko1=new plinko(123,132,10,10);
  plinko2=new plinko();
  plinko3=new plinko();
  plinko4=new plinko();
  plinko5=new plinko();
  plinko6=new plinko();
  plinko7=new plinko();
  
}
function draw() { 
  background(0);
  ground.display();
  division1.display();
  division2.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  for (var k = 0; k <=width; k = k+80){
    divisions.push(new Ground(k,height-divisionHeight/2,10,divisionHeight));
  }
  drawSprites();
}