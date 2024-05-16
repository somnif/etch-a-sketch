const container = document.querySelector("#container")
const promptButton = document.querySelector("#btn-prompt")
const resetButton = document.querySelector("#btn-reset")

const INITIAL_SIZE = 16;
let gridWidth = INITIAL_SIZE;
let gridHeight = INITIAL_SIZE;

const drawGrid = () => {
    console.log("drawing a grid to" + gridHeight)
    container.innerText = "";
    for (let i = 0; i < gridHeight; i++){
        let row = document.createElement("div")
        row.setAttribute("class", "grid-row")

        for (let j = 0; j < gridWidth; j++){
            let grid = document.createElement("div")
            grid.setAttribute("class", "grid-item")
            row.appendChild(grid)
            grid.addEventListener("mouseover", (e) => {
                e.target.setAttribute("style", "background-color: black")
            })
        }
        container.appendChild(row)
    }
}

const promptUser = () => {
    let newSize = parseInt(prompt("Please enter a new grid size"));
    console.log (newSize)
    if (Number.isInteger(newSize) && newSize <= 100 && 1 <= newSize){
        newGrid (newSize)
    } else {
        alert("Please enter a number between 1 and 100")
    }
}

const newGrid = (size) => {
    console.log("Resizing to " + size)
    gridWidth = size;
    gridHeight = size;
    drawGrid();
}

promptButton.addEventListener("click", promptUser)
resetButton.addEventListener("click", drawGrid)

window.addEventListener("load", drawGrid, {
    once: true
});