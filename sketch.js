var trex, trex_running, edges;
var ground, groundImage;
function preload(){
  //trex correndo ANIMAÇÃO
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadAnimation("ground2.png");
}


function setup(){
  //criando a area do game
   createCanvas(600,200);
   //criando o trex
   trex = createSprite(50,160,20,50);
  
  //PARA COLOCAR ANIMATION
  trex.addAnimation("running", trex_running);
  //criando bordas 
  edges = createEdgeSprites();
  //SCALE
  trex.scale = 0.5;
  //criando ground
  ground = createSprite(200,180,400,20);
 ground.addAnimation("ground", groundImage);
}

function draw(){
  background('white');
  ground.velocityX = -2;
  if (ground.x < 0) {

    ground.x = ground.width / 2;

  }



  //fazer o trex pular
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  //faz com que o TRex volte para o chão
  trex.velocityY =  trex.velocityY + 0.5;
  //colide com a borda
  trex.collide(edges[3]);
  trex.collide(ground);
  drawSprites();
  
}


