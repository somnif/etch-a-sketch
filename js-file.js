const container = document.querySelector("#container")
const INITIAL_SIZE = 16;
let gridWidth = INITIAL_SIZE;
let gridHeight = INITIAL_SIZE;

const drawGrid = (width, height) => {
    container.innerText = "";
    for (let i = 0; i < height; i++){
        let row = document.createElement("div")
        row.setAttribute("class", "grid-row")

        for (let j = 0; j < width; j++){
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

window.addEventListener("load", drawGrid(gridWidth, gridHeight), {
    once: true
});