var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  
  car = createSprite(50, 200, 50, 50);
  car.velocityX=speed
  wall = createSprite(1500,200,60,height/2)
}

function draw() {
  background(0);  
  if(wall.x-car.x<car.width/2+wall.width/2)
  {
   car.velocityX=0
   var d=0.5*weight*speed*speed/22509;
   if(d>180)
   {
    car.shapeColor="green";
   }
   if(d<180 && d>100)
   {
    car.shapeColor="red";
   }
   if(d<100)
   {
    car.shapeColor="yellow";
   }
   }
  drawSprites();
}