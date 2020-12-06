var thickness ,wall
var speed, weight, bullet

function setup(){
createCanvas(6500,400)
speed=random(55,90);
weight=random(400,1500);
bullet=createSprite(50,200,50,5);
thickness=random(20,90)
wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(80,80,80);
bullet.shapeColor="white"
bullet.velocityX=speed
}
function draw(){
background("black");
bullet.display();
wall.display();

  
  if (hasCollided(bullet,wall)){
  bullet.velocityX=0
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if (damage>10){
	wall.shapeColor=color(255,0,0)
}
if (damage<10){
	wall.shapeColor=color(0.255,0)
}

  }
}
function hasCollided(bullet, wall){
bulletRightEdge=bullet.x + bullet.width
wallLeftEdge=wall.x
if (bulletRightEdge>=wallLeftEdge){
	return true
}
return false
}





