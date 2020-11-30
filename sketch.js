 
var car,wall;
var speed,weight;


function setup() {

 createCanvas(1600,400)
 speed=random(55,90);
 weight=random(400,1500);
 
 car = createSprite(50,200,50,50);
 car.velocityX = speed;
 car.shapeColor=color(255)

 wall = createSprite(1200,200,60,height/2);
 wall .shapeColor=color(80,80,80);

 
}

function draw() {
  background("black");  
  
 if(wall.x-car.x< (car.width+wall.width)/2){
   car.velocityX=0;
   var deformation=0.5 *weight*speed*speed/22509;
 //not required
 //car.velocityY=World.mouseY;
  
  if(deformation>180){
    car.shapeColor=color("yellow");
    wall.shapeColor=color("white");
  }
  else if(deformation<180 && deformation>100)
   {
     wall.shapeColor("white");
     car.shapeColor=color("green");
   }
 else  if(deformation<100)
   {
     wall.shapeColor("white");
     car.shapeColor=color("red");
   }
  }
  drawSprites();
 } 


