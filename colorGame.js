const colors = generateRandomColors(6);

const squares = document.querySelectorAll(".square");
const pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");

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