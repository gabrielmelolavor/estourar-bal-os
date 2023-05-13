var arco,flecha,planoDefundo,bVermelho,bRosa,bVerde,bAzul,grupoFlecha,cena,estadoJogo;
var imagemArco,imagemFlecha,imagem_balaoVerde,imagem_balaoVermelho,imagem_balaoRosa,imagem_balaoAzul,imagemDeFundo;

var placar =0;

function preload(){
  
  imagemDeFundo = loadImage("background0.png")
  
  imagemFlecha = loadImage("arrow0.png")
  imagemArco = loadImage("bow0.png")
  imagem_balaoVermelho = loadImage("red_balloon0.png")
  imagem_balaoVerde = loadImage("green_balloon0.png")
  imagem_balaoRosa = loadImage("pink_balloon0.png")
  imagem_Azul = loadImage("blue_balloon0.png")
  
}


function setup() {
  createCanvas(400, 400)
  
  cena = createSprite(0,0,400,400)
  cena.addImage(imagemDeFundo);
  cena.scale = 2.5
  
  arco = createSprite(380,220,30,50)
  arco.addImage(imagemArco);
  arco.scale = 1;
  
  bVermelho = new Group();
  bVerde = new Group ();
  bRosa = new Group();
  bAzul = new Group();
  grupoFlecha = new Group();
  
  
  estadoJogo= "parado"
  
  
  
  
  
  
}


function draw() {
  background(220);
    drawSprites()
  if(estadoJogo=="parado"){
    textSize(20)
    text("pressione space para começar",50,200)
    
    if(keyDown("space")){
      estadoJogo = "play"
    }
    
  //  if(keyDown("shift"))
    //estadoJogo = "parado"
  } 
  
  if(estadoJogo=="gameOver"){
    
  }
  
  if(estadoJogo=="play"){
    cena.velocityX = -3
  
  if(cena.x < 0){
    cena.x = cena.width/2;
  }
  
  arco.y = World.mouseY
  
  if(keyDown('space')){
    criarFlechas();
  }
  
  var selecionar_balao = Math.round(random(1,4));
  
  
  if(World.frameCount % 100 == 0){
   if(selecionar_balao == 1){
     balaoVermelho();
   } else if(selecionar_balao == 2){
     balaoVerde();
   }else if(selecionar_balao == 3){
     balaoAzul();
   }else{
     balaoRosa()
   }   
    
  }
  
 if(grupoFlecha.isTouching(bVermelho)) {
   bVermelho.destroyEach();
   grupoFlecha.destroyEach();
   placar = placar + 1
   
 }
  
 if(grupoFlecha.isTouching(bVerde)) {
   bVerde.destroyEach();
   grupoFlecha.destroyEach();
   placar = placar + 3
  
 }
  
  
 if(grupoFlecha.isTouching(bAzul)) {
   bAzul.destroyEach();
   grupoFlecha.destroyEach();
   placar = placar + 2
  
 }
  
  
 if(grupoFlecha.isTouching(bRosa)) {
   bRosa.destroyEach();
   grupoFlecha.destroyEach();
   placar = placar + 1
 }
  }
  
  
  

  
  text("placar: "+ placar,300,50)
  
  
  
}



function balaoVermelho(){
  
  var vermelho = createSprite(0,Math.round(random(20,370)), 10, 10)
  
  vermelho.addImage(imagem_balaoVermelho);
  vermelho.velocityX = 3;
  vermelho.lifetime = 150;
  vermelho.scale = 0.1;
  bVermelho.add(vermelho);

}

function balaoAzul(){
  
  var azul = createSprite(0,Math.round(random(20,370)), 10, 10)
  
  azul.addImage(imagem_Azul);
  azul.velocityX = 3;
  azul.lifetime = 150;
  azul.scale = 0.1;
  bAzul.add(azul);
}


function balaoVerde(){
  
  var verde = createSprite(0,Math.round(random(20,370)), 10, 10)
  
  verde.addImage(imagem_balaoVerde);
  verde.velocityX = 3;
  verde.lifetime = 150;
  verde.scale = 0.1;
  bVerde.add(verde);
  
}


function balaoRosa(){
  
  var rosa = createSprite(0,Math.round(random(20,370)), 10, 10)
  
  rosa.addImage(imagem_balaoRosa);
  rosa.velocityX = 3;
  rosa.lifetime = 150;
  rosa.scale = 1.2
  bRosa.add(rosa);

}

 function criarFlechas(){
 var flecha = createSprite(100,100,60,10);  
   flecha.debug = false
   flecha.setCollider("circle",-50,0,20)
   flecha.addImage(imagemFlecha);
   flecha.x = 360;
   flecha.y = arco.y;
   flecha.velocityX = -4; 
   flecha.lifetime = 100;
   flecha.scale = 0.3;
   grupoFlecha.add(flecha);
 }