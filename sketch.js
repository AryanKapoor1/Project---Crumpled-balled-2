const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, paper, dustbin;

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(800,height,1600,20)
    paper = new Paper(200,100)
    dustbin = new Dustbin(1200,340)
    
}

function draw(){
    background('red');
    Engine.update(engine);
   console.log(paper.body.position)
   
    ground.display();
    paper.display();
    dustbin.display()
}

function keyPressed(){
if (keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10})
}


}
