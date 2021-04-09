const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(880,380,50,50);
    box2 = new Box(990,380,50,50);
    box3 = new Box(880,310,50,50);
    box4 = new Box(960,310,50,50);
    box5 =new Box(940, 250, 50, 50);

    pig1 = new Pig(940, 380);
    pig2 = new Pig(940, 310);

    log1 = new Log(940, 320, 170, PI/2);
    log2 = new Log(940, 290, 170, PI/2);
    log3 = new Log(880, 200, 100, PI/7);
    log4 = new Log(960, 200, 100, PI/-7);

    bird1 = new Bird(200, 200);

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
    ground.display();
}
