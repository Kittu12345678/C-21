var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100, 600, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject1.velocityY = -2;
  gameObject2 = createSprite(300, 600, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(500, 600, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(700, 600, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if (isTouching(gameObject1, movingRect)) {
    bounceOff(gameObject1, movingRect)
  }


  

  if (isTouching(gameObject1, movingRect)) {
    gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else {
    gameObject1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }



  drawSprites();
}


function isTouching(obj1, obj2){

  if (obj1.x - obj2.x < obj1.width/2 + obj2.width/2
    && obj2.x - obj1.x < obj1.width/2 + obj2.width/2
    && obj1.y - obj2.y < obj1.height/2 + obj2.height/2
    && obj2.y - obj1.y < obj1.height/2 + obj2.height/2) {

      return true;

  }
  else {
    return false;
  }

}


function bounceOff(obj1, obj2){

  if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2
    && obj2.x - obj1.x < obj1.width/2 + obj2.width/2){

      obj1.velocityX = (-1)*obj1.velocityX;
      obj2.velocityX = (-1)*obj1.velocityX;

  }

  if(obj1.y - obj2.y < obj1.height/2 + obj2.height/2
    && obj2.y - obj1.y < obj1.height/2 + obj2.height/2){

      obj1.velocityY = (-1)*obj1.velocityY;
      obj2.velocityY = (-1)*obj1.velocityY;

  }

}