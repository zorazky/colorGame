let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);

const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const resetButton = document.querySelector("#reset");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected")
    numberOfSquares = 3;

    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    squares.forEach((square, i) => {
        if (colors[i]) {
            square.style.backgroundColor = colors[i];
        } else {
            console.log(squares[i])
            square.style.display = "none";
        }
        //square.style.backgroundColor = colors[i];
    })
    console.log(squares)
    console.log(colors)
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected")
    easyBtn.classList.remove("selected")
    numberOfSquares = 6;

    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    squares.forEach((square, i) => {
        
        square.style.backgroundColor = colors[i];   
        square.style.display = "block";
       
    })
});

resetButton.addEventListener("click", function() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    squares.forEach((square, i) => {
        square.style.backgroundColor = colors[i];
    })
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

// for (let i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i]
// }

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