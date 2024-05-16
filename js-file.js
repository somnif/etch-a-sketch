const container = document.querySelector("#container")
const promptButton = document.querySelector("#btn-prompt")
const resetButton = document.querySelector("#btn-reset")
const colorModeBox = document.querySelector("#color-mode")
const colorMode = document.querySelectorAll("#color-mode > span")

const INITIAL_SIZE = 16;
let gridWidth = INITIAL_SIZE;
let gridHeight = INITIAL_SIZE;
let colorToggle = false;

const drawGrid = () => {
    container.innerText = "";
    for (let i = 0; i < gridHeight; i++){
        let row = document.createElement("div")
        row.setAttribute("class", "grid-row")

        for (let j = 0; j < gridWidth; j++){
            let grid = document.createElement("div")
            grid.setAttribute("class", "grid-item")
            row.appendChild(grid)
            grid.addEventListener("mouseover", setBackgroundColor)
        }
        container.appendChild(row)
    }
}

const promptUser = () => {
    let newSize = parseInt(prompt("Please enter a new grid size"));
    if (Number.isInteger(newSize) && newSize <= 100 && 1 <= newSize){
        newGrid (newSize)
    } else {
        alert("Please enter a number between 1 and 100")
    }
}

const newGrid = (size) => {
    gridWidth = size;
    gridHeight = size;
    drawGrid();
}

const setBackgroundColor = (element) => {
    ;
    if (!element.target.style.backgroundColor) {
        element.target.style.backgroundColor = colorToggle ? genRandColor() : "#000";
        element.target.style.opacity = "0.5"
    } else {
        if (parseFloat(element.target.style.opacity) < 1) {
            element.target.style.opacity = (parseFloat(element.target.style.opacity) + 0.1).toString();
        }
    }
}

const genRandColor = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16)};

const enableColorMode = () => {
    colorToggle = !colorToggle;
    colorMode.forEach((letter) => {
        letter.setAttribute("style", "color: " + (colorToggle ? genRandColor() : "#000"))
    })
}

promptButton.addEventListener("click", promptUser)
resetButton.addEventListener("click", drawGrid)
colorModeBox.addEventListener("click", enableColorMode)

window.addEventListener("load", drawGrid, {
    once: true
});