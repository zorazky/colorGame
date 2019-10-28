let numberOfSquares = 6;
let colors = [];
let pickedColor;


const squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");

init();

function init () {
    
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    modeButtons.forEach((mode, i) => {
        mode.addEventListener("click", function() {
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected");
    
            this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
            
            reset();
        })
    })
}

function setupSquares() {
    squares.forEach((square, i) => {
        square.style.backgroundColor = colors[i];
    
        square.addEventListener("click", function() {
            const clickedColor = this.style.backgroundColor;
    
            if (clickedColor === pickedColor) {
                console.log("correct")
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor)
                h1.style.backgroundColor = clickedColor;
            } else {
                console.log("wrong")
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    })
}



function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    
    squares.forEach((square, i) => {
        if (colors[i]) {
            square.style.display = "block";
            square.style.backgroundColor = colors[i];
        } else {
            console.log(squares[i])
            square.style.display = "none";
        }
    })

    h1.style.backgroundColor = "steelblue"
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    squares.forEach((square, i) => {
        square.style.backgroundColor = color;
    })
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(randomColor())
    }

    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}