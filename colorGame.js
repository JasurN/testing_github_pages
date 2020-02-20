var colors = [];

var winningColor = pickColor();

var squares = document.querySelectorAll(".square");
var rgbValue = document.getElementById("rgbColor");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#resetBtn");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numberOfColorsToDisplay = 6;
var numberOfClicks = 0;

init(numberOfColorsToDisplay);
resetBtn.addEventListener("click", generateNewColor);
easyBtn.addEventListener("click", easyBtnClick3ColorShow);
hardBtn.addEventListener("click", hardBtnClick3ColorShow);


resetBtn.addEventListener("mouseover",mouseHoverEventListener);

addEventListenerToSquares();

function addEventListenerToSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        setColor(i);
        //add click listeners to colors
        squares[i].addEventListener("click", validateColorPick);
    }
}

function mouseHoverEventListener() {

}


function init(numberOfColorsToDisplay) {
    colors = generateRandomColor(numberOfColorsToDisplay);
    winningColor = pickColor();
    messageDisplay.textContent = "";
    rgbValue.textContent = winningColor;
    h1.style.backgroundColor = "steelblue";
    setNewColors();
}

function generateNewColor() {
    init(numberOfColorsToDisplay);
    messageDisplay.textContent = "New Colors";

}

function easyBtnClick3ColorShow() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfColorsToDisplay = 3;
    init(numberOfColorsToDisplay);
}

function hardBtnClick3ColorShow() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfColorsToDisplay = 6;
    init(numberOfColorsToDisplay);

}

function setNewColors() {
    for (var i = 0; i < squares.length; i++) {
        //add initial colors to squares
        setColor(i);
    }

}

function setColor(i) {
    squares[i].style.backgroundColor = colors[i];
}




function validateColorPick() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor !== "#232323") {
        if (clickedColor === winningColor) {
            messageDisplay.textContent = "Correct";
            h1.style.backgroundColor = winningColor;
            changeColorsToSameColor(winningColor);
            resetBtn.textContent = "Play Again?";
            numberOfClicks++;
            if(numberOfClicks > 1) {
                numberOfClicks = 0;
                generateNewColor();
            }
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    }
}

function changeColorsToSameColor(color) {
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * numberOfColorsToDisplay)];
}

function generateRandomColor(number) {
    var colors = [];
    for (var i = 0; i < number; i++) {
        //making string like: rgb(value1, value2, value3)
        //rgb(0-255, 0-255, 0-255)
        colors[i] = "rgb(" + Math.floor(Math.random() * 256) +
            ", " + Math.floor(Math.random() * 256) +
            ", " + Math.floor(Math.random() * 256) + ")"
    }
    if (number === 3) {
        colors[3] = "#232323";
        colors[4] = "#232323";
        colors[5] = "#232323";
    }
    return colors;
}