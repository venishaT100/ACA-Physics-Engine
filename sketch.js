//Write your code here
const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground, brick1, brick2, brick3, ball1, ball2, box;

function setup(){
canvas = createCanvas(600,600);
engine = Engine.create();
world = engine.world;

var ground_options={
    isStatic: true
}
var b1_options={
    restitution: 0.5
}
var b2_options={
    restitution: 0.5
}
var brick1_options={
    restitution: 1
}
var brick2_options={
    restitution: 1
}
var brick3_options={
    restitution: 1
}
var box_options={
    restitution: 1
}

ground = Bodies.rectangle(300,590,600,20,ground_options);
box = Bodies.rectangle(390,390,100,100,box_options);
brick1 = Bodies.rectangle(400,400,120,60,brick1_options);
brick2 = Bodies.rectangle(400,400,120,60,brick2_options);
brick3 = Bodies.rectangle(400,400,120,60,brick3_options);

ball1 = Bodies.circle(220,100,40,b1_options);
ball2 = Bodies.circle(60,100,40,b2_options);
Composite.add(world, [box,ground,ball1,ball2,brick1,brick2,brick3]);
}

function draw(){
    background('#00FFFF');
    Engine.update(engine);
    rectMode(CENTER);
    fill('#007107');
    rect(ground.position.x, ground.position.y, 600, 20);
    fill('#9300FF');
    rect(box.position.x, box.position.y, 100, 100);
    fill('grey');
    rect(brick1.position.x, brick1.position.y, 250, 60);
    fill('grey');
    rect(brick2.position.x, brick2.position.y, 250, 60);
    fill('grey');
    rect(brick3.position.x, brick3.position.y, 250, 60);
    

    ellipseMode(RADIUS);
    fill('yellow');
    ellipse(ball1.position.x, ball1.position.y, 40);
    fill('yellow');
    ellipse(ball2.position.x, ball2.position.y, 40);

}