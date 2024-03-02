const audioFile = ['blue','green','yellow','red','wrong','game-over','game-win']
let audio;

const dataTileColors = ['green','blue','yellow','red']
const gameBoard = document.querySelector(".btoard")
const startBtn = document.getElementById("play")
const startingLevel = document.getElementById("level")

const dataTileGreen = document.querySelector('.inactive'); 
const dataTileYellow = document.querySelector('.inactive'); 
const dataTileRed = document.querySelector('.inactive'); 
const dataTileBlue = document.querySelector('.inactive'); 

const finalLevel = 12;
let level = 0;
let highScore = 0;
let win = false;
let order = [];
let playerOrder = [];

function blueAudio(){
    audio = new Audio(`./sounds/${audioFile[0]}.mp3`)
    audio.play();
}
function greenAudio(){
    audio = new Audio(`./sounds/${audioFile[1]}.mp3`)
    return audio.play();
}
function yellowAudio(){
    audio = new Audio(`./sounds/${audioFile[2]}.mp3`)
    return audio.play();
}
function redAudio(){
    audio = new Audio(`./sounds/${audioFile[3]}.mp3`)
    return audio.play();
}
function wrongAudio(){
    audio = new Audio(`./sounds/${audioFile[4]}.mp3`)
    return audio.play();
}
function gameOverAudio(){
    audio = new Audio(`./sounds/${audioFile[5]}.wav`)
    return audio.play();
}
function gameWinAudio(){
    audio = new Audio(`./sounds/${audioFile[6]}.wav`)
    return audio.play();
}


startBtn.addEventListener('click', (event) => {

    startGame()
})

function startGame(){

    let win = false;
    highScore = 0;
    level = 1;
    startingLevel.innerHTML = level
    
    for (let i=0; i < 12; i++){
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    console.log(order)

}

function clearColor(){
    dataTileGreen.style.opacity = '30%';
    dataTileBlue.style.opacity = '30%';
    dataTileYellow.style.opacity = '30%';
    dataTileRed.style.opacity = '30%';
}
