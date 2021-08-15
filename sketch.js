var library, libraryImg;
var librarian, librarianImg;
var boy, boyImg, boysGroup;
var nail, nailImg, nailsGroup;
var score;

var invisibleGround;
var gameState = "play";

function preload(){
libraryImg =  loadImage("library.jpg");
librarianimg = loadImage("librarian.jpeg");
boyImg = loadImage("boy.jpeg");
nailImg = loadImage("nail.png");
}

function setup() {
 createCanvas(400,500);
 library = createSprite(400,200);
 library.addImage("library", libraryImg);
 library.velocityX = -1;
 nailsGroup = new Group();
 
 boy = createSprite(100,280,70,70);
 boy.scale = 0.3;
 boy.addImage(boyImg);
 invisibleGround = createSprite(100,400,400,10)
invisibleGround.visible = true;

score = 0;
}

function draw() {
    background(200);
    
boy.collide(invisibleGround);
if (gameState === "play"){

 if (library.x < 80){
  library.x = library.width/2;
}

if(keyDown("space") && boy.y >= 100){
boy.velocityY = -10
score = score +10;
}

boy.velocityY = boy.velocityY + 0.8;
spawnNails();

if (nailsGroup.isTouching(boy)){
    boy.destroy();
    gameState = "end";
}

nailsGroup.setVelocityXEach(0);
text ("Score: "+score, 200,20);

 drawSprites();
}

 if (gameState === "end"){
     fill (30,100,70);
     text ("Game Over", 300, 300)
 }
}

function spawnNails(){
    if (frameCount%100 === 0){
var nail = createSprite(200, 165, 10,40);
nail.velocityX = -1;
nail.addImage(nailImg);
nail.scale = 0.07
nail.x = Math.round(random(100,110))
nail.lifetime = 100;;
nailsGroup.add(nail);
    }
}
