
var database
var gameState = 0;
var playerCount,players;

var database;

var form, player, game,car1,car2,car3,car4,cars;

function preload() {
    carimg1=loadImage("car1.png")
    carimg2=loadImage("car2.png")
    carimg3=loadImage("car3.png")
    carimg4=loadImage("car4.png")
    track=loadImage("track.jpg")
}

function setup(){
    createCanvas(windowWidth-40,windowHeight-40);

    //initiating the database
    database = firebase.database()
    game = new Game() 
    game.getState()
    game.start()
}

function draw(){
 if(playerCount ===4) {
     game.updateState(1)
 }
 if(gameState===1) {
     game.play()
 }
 if(gameState===2) {
     game.end()
 }  

}
