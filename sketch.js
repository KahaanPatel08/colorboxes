var  movingRect;

function setup() {
  createCanvas(1200,800);
  edges =createEdgeSprites();

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "white";
  movingRect.debug = true;
  gameObject1=createSprite(300,400,50,60);
  gameObject1.shapeColor="red"
  gameObject2=createSprite(400,400,50,60);
  gameObject2.shapeColor="orange"
  gameObject3=createSprite(500,400,50,60);
  gameObject3.shapeColor="yellow"
  gameObject4=createSprite(700,400,50,60);
  gameObject4.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

 
if(isTouching(movingRect,gameObject1))
{
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
}
else{

  //movingRect.shapeColor = "white";
  gameObject1.shapeColor = "red";
}

if(isTouching(movingRect,gameObject4))
{
  movingRect.shapeColor = "blue";
  gameObject4.shapeColor = "blue";
}
else{

 // movingRect.shapeColor = "white";
  gameObject4.shapeColor = "blue";
}

if(isTouching(movingRect,gameObject3))
{
  movingRect.shapeColor = "yellow";
  gameObject3.shapeColor = "yellow";
}
else{

  //movingRect.shapeColor = "white";
  gameObject3.shapeColor = "yellow";
}

if(isTouching(movingRect,gameObject2))
{
  movingRect.shapeColor = "orange";
  gameObject2.shapeColor = "orange";
  gameObject2.width=100;
  gameObject2.height=100;
}
else{

  //movingRect.shapeColor = "white";
  gameObject2.shapeColor = "orange";
  gameObject2.width=50;
  gameObject2.height=50;
}
  
//movingRect.bounceOff(edges[1]);
//movingRect.bounceOff(edges[2]);
//movingRect.bounceOff(edges[3]);
//movingRect.bounceOff(edges[4]);
  
  drawSprites();
}
function isTouching(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

  return true;
}

else {
  return false;
}



}