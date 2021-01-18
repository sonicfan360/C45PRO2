
var Godzilla, GodzillaImg
var SpaceGodzilla, SpaceGImg
var Bagan, BaganImg
var Ocean, OceanBg
var ACC, ACCImg
var engine, world, object;
var ground
var Health = 0
var H2,H2I
function preload(){
  OceanBg = loadImage("Images/Oceanbg.jpg");
  ACCImg = loadImage("Images/Baganbg.jpeg");
  GodzillaImg = loadImage("Images/Godzilla.gif")
  SpaceGImg = loadImage("Images/Spacegodzilla.png")
  H2I = loadImage("Images/Helicopter2.png")
  BaganImg = loadImage("Images/Bagan.png")
}
function setup() {
  createCanvas(800,600);
  Ocean = createSprite(400,100,800,600)
  Ocean.addImage("Oceanbg",OceanBg)
  Bagan = createSprite(700,400,50,50)
  Bagan.addImage("Bagan",BaganImg)
  Bagan.scale = 1.5
  H2 = createSprite(300,300,50,50)
  H2.addImage("Helicopter2", H2I)
  H2.scale=0.2
  Godzilla = createSprite(200,500,50,50)
  Godzilla.addImage("Godzilla", GodzillaImg)
  Godzilla.scale = 0.8
  SpaceGodzilla = createSprite(600,460,800,600)
  SpaceGodzilla.addImage("Spacegodzilla",SpaceGImg)
  SpaceGodzilla.scale = 1.5



}
  
  

function draw() {
  background(220,255,255);  
  if(keyIsDown(LEFT_ARROW)){
    Godzilla.velocityX=-3
    MoveSpaceGodzilla()
  }
  if(keyIsDown(RIGHT_ARROW)){
    Godzilla.velocityX=3
    MoveSpaceGodzilla()
  }
  
  drawSprites();
}

function keyReleased() {
  if(keyCode === LEFT_ARROW){
    Godzilla.velocityX=0
  }
  if(keyCode === RIGHT_ARROW){
    Godzilla.velocityX=0
  }
  return false; // prevent any default behavior
}
function MoveSpaceGodzilla(){
  if(Godzilla.velocityX > 0)
  {
    SpaceGodzilla.x = SpaceGodzilla.x+4
    Bagan.x = Bagan.x+0.5
  }
  if(Godzilla.velocityX < 0)
  {
    SpaceGodzilla.x = SpaceGodzilla.x-4
    Bagan.x = Bagan.x-0.5
  }

}