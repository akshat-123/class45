var bg,bgImg;
var spacex,spacexImg;
var enemy,enemyImg;
var ammo,ammoImg;
var bullet,bulletImg;

function preload(){
  
spacexImg = loadImage("spacex.png");
enemyImg = loadImage("enemy.png");
bulletImg = loadImage("bullet.png");
  bgImg = loadImage("bg.png");
  ammoImg = loadImage("ammo.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  background = createSprite(width,height,600,600);
  background.addImage(bgImg);
  background.scale = 3.5;

  spacex = createSprite(width/2,height/2+200,50,50);
  spacex.addImage(spacexImg);
  spacex.scale = 0.2;



  // creating spacex to shoot ammo
  ammo = createSprite(480,220,20,50);
  ammo.addImage(ammoImg); 
  ammo.scale = 1;
  

// creating enemy to shoot bullet
bullet = createSprite(480,220,50,50);
bullet.addImage(bulletImg); 
bullet.scale = 1;


}

function draw() {
  //background(0); 

  background.velocityY = 3 

  if (background.x < 0){
    background.x = background.width/2;
  }
enemySprite();
drawSprites();
}

function enemySprite(){
  enemy = createSprite(width/2,height/2-100,50,50);
  enemy.addImage(enemyImg);
  enemy.scale = 0.2;
}

// Creating  ammo for spacex
function createammo() {   
  ammo= createSprite(360, 100, 5, 10);
  ammo.velocityY = 6;
  ammo.scale = 0.3;
  return ammo;
}


// Creating  bullet for enemy
function createbullet() {   
  bullet= createSprite(360, 100, 5, 10);
  bullet.velocityY = -6;
  bullet.scale = 0.3;
  return bullet;
}