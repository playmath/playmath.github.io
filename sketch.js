var logo;
var singleplayer;
var multiplayer;


function preload(){
logo = loadImage("Logo Transperant.png");
    
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    singleplayer = createButton("Single Player");
    singleplayer.position(width/2 - 100,220);
    singleplayer.class("button");
    singleplayer.mouseClicked(singleplayeropen);

    multiplayer = createButton("Multi Player");
    multiplayer.position(width/2 - 100, 320);
    multiplayer.class("button");
    multiplayer.mouseClicked(multiplayeropen);


}

function draw() {
    background("white");
    imageMode(CENTER);
  image(logo,width/2, 100,150,150);
    drawSprites();

}

function singleplayeropen(){
window.open("https://playmath.github.io/singleplayer","_self");
}

function multiplayeropen(){
window.open("https://playmath.github.io/multiplayer","_self");
}
