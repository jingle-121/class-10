


var appleImg;

function preload(){
    appleImg=loadImage("apple2.png")
}



function setup(){
createCanvas(400,400)

var ball=createSprite(200,200,20,20)
ball.addImage(appleImg)


}


function draw(){



drawSprites()

}