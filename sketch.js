var car;

function setup(){
createCanvas(800,800)
 
 car=createSprite(200,200,10,10)
car.shapeColor="red"



}

function draw(){
background(255)

if(keyDown(UP_ARROW)){
changePosition(0,-1)

}
else if(keyDown(DOWN_ARROW)){
    changePosition(0,1)
}
else if(keyDown(RIGHT_ARROW)){
    changePosition(1,0)
}
else if(keyDown(LEFT_ARROW)){
    changePosition(-1,0)
}


drawSprites();

}

function changePosition(x,y){
car.x=car.x+x
car.y=car.y+y

}