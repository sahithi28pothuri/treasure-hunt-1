var player;
var bg, bgImg;
var playb, playImg;
var SERVE = 1;
var PLAY = 2;
var END = 3;
var startSound;
var gameState = "SERVE";


function preload(){
    bgImg = loadImage("bgg.png");
    playImg = loadImage("play.png");
    startSound = loadSound("serve.mp3");
}

function setup(){
    createCanvas(1100,800);

    

    bg = createSprite(550,400);
    bg.addImage("bg",bgImg);
    bg.visible=true;
    bg.scale=1.42;

    playb = createSprite(560,600);
    playb.addImage("playing",playImg);

}

function draw(){
    background("black");
    

    drawSprites();

    
    if (gameState === "SERVE"){
        startSound.play()
        if(mousePressedOver(playb)) {
            gameState = PLAY;
        }
    }
    if (gameState === "PLAY"){
        playb.visible = false;
    }
}