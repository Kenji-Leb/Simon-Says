const audioFile = ['blue','green','yellow','red','wrong','game-over','game-win']

const dataTileColors = ['green','blue','yellow','red']
const gameBoard = document.querySelector(".btoard")
const startBtn = document.getElementById("play")
const startingLevel = document.getElementById("level")

//[data-tile="green"]

const dataTileGreen = document.querySelector('.inactive'); 
const dataTileYellow = document.querySelector('.inactive'); 
const dataTileRed = document.querySelector('.inactive'); 
const dataTileBlue = document.querySelector('.inactive'); 



const finalLevel = 12;
let level = 0;
let highScore = 0;
let win;
let turn;
let compTurn;
let on = false;
let flash;
let good;
let interValId;
let order = [];
let playerOrder = [];

function blueBtn(){
    let audio = new Audio(`./sounds/${audioFile[0]}.mp3`)
    audio.play();
    dataTileBlue.style.opacity = '100%'
}
function greenBtn(){
    let audio = new Audio(`./sounds/${audioFile[1]}.mp3`)
    audio.play();
    dataTileGreen.style.opacity = '100%'
}
function yellowBtn(){
    audio = new Audio(`./sounds/${audioFile[2]}.mp3`)
    audio.play();
    dataTileYellow.style.opacity = '100%'
}
function redBtn(){
    audio = new Audio(`./sounds/${audioFile[3]}.mp3`)
    audio.play();
    dataTileRed.style.opacity = '100%'
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

function clearColor(){
    dataTileGreen.style.opacity = '30%';
    dataTileBlue.style.opacity = '30%';
    dataTileYellow.style.opacity = '30%';
    dataTileRed.style.opacity = '30%';
}

function flashColor(){
    dataTileGreen.style.opacity = '100%';
    dataTileBlue.style.opacity = '100%';
    dataTileYellow.style.opacity = '100%';
    dataTileRed.style.opacity = '100%';
}

startBtn.addEventListener('click', (event) => {
    const board = document.querySelector('.board');
    board.style.pointerEvents = 'auto'
    on = true;
    startGame();
})

function startGame(){

    win = false;
    order = []
    playerOrder = []
    highScore = 0;
    startingLevel.innerHTML = 1;
    turn = 1;
    flash = 0;
    interValId = 0;
    good = true;

    for (let i=0; i < 12; i++){
        order.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;

    interValId = setInterval(gameTurn, 800)
}

function gameTurn(){
    on = false;

    if (flash == turn){
        clearInterval(interValId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn){
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) blueBtn();
            if (order[flash] == 2) greenBtn();
            if (order[flash] == 3) yellowBtn();
            if (order[flash] == 4) redBtn();
            flash++;
        }, 200)
    }
}


dataTileGreen.addEventListener('click', (event) =>{
    console.log("clicked")
    if (on){
        playerOrder.push(2);
        check()
        greenBtn()
        if(!win){
            setTimeout(() => {
                clearColor()
            }, 300)
        }
    }
})
dataTileBlue.addEventListener('click', (event) =>{
    console.log("clicked")
    if (on){
        playerOrder.push(1);
        check()
        blueBtn()
        if(!win){
            setTimeout(() => {
                clearColor()
            }, 300)
        }
    }
})
dataTileYellow.addEventListener('click', (event) =>{
    console.log("clicked")
    if (on){
        playerOrder.push(3);
        check()
        yellowBtn()
        if(!win){
            setTimeout(() => {
                clearColor()
            }, 300)
        }
    }
})
dataTileRed.addEventListener('click', (event) =>{
    console.log("clicked")
    if (on){
        playerOrder.push(4);
        check()
        redBtn()
        if(!win){
            setTimeout(() => {
                clearColor()
            }, 300)
        }
    }
})

function check(){
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
    good = false;

    if (playerOrder.length == 12 && good) {
        winGame()
    }

    if(good == false){
        flashColor();
        startingLevel.innerHTML = "wrong"
        setTimeout(() => {
            startingLevel.innerHTML = turn;
            clearColor();
        }, 800)
    }

    if (turn == playerOrder.length && good && !win){
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        startingLevel.innerHTML = turn;
        interValId = setInterval(gameTurn, 800);
    }
}

function winGame(){
    flashColor();
    startingLevel.innerHTML = "You Win!"
    on = false;
    win = true;
}