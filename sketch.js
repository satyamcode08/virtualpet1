//Create variables here
var dog,happydog,database,foods,foodstock;
function preload()
{
  //load images here
  happydog=loadImage("images/dogImg1.png");
  dogimg=loadImage("images/dogImg.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog=createSprite(250,350);
  dog.addImage(dogimg);
foodstock=database.ref("food");
foodstock.on("value",readstock);

}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writestock(foods);
dog.addImage(happydog);
dog.scale=0.05;
}
  drawSprites();
  //add styles here
textSize(20);
fill("white");
stroke("purple");
text("press up arrow to feed the dog",50,100);

}
function writestock(x){
if(x<=0){
x=0;
}else{
  x=x-1;
}
database.ref("/").update({
  food:x
})
}
function readstock(data){
  foods=data.val();

}





