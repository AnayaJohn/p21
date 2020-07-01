var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor=color("white")
  wall=createSprite(1200, 200,thickness, height/2);
  wall.shapeColor=color(80,80,80);
  //weight=createSprite()

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet.velocityX=speed;

}

function draw() {
  background(0); 
  
  //wall.shapeColor="white";

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0
  var deformation=(0.5*speed*speed*weight)/22500;

  if(deformation<100){
    bullet.shapeColor="green";
    //bullet.velocityX=0;
  }
  if(deformation<180 && deformation>100){
    bullet.shapeColor="yellow";
    //bullet.velocityX=0;
  }
  if(deformation>180){
    bullet.shapeColor="red";
    //bullet.velocityX=0;
  }
}
  //bullet.display();
  //wall.display();
  drawSprites();
}