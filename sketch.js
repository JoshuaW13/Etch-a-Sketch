function setGrid(gridDimensions){
    grid.style.gridTemplateColumns = `repeat(${gridDimensions}, 1fr)`;
    for(let i =0;i<gridDimensions*gridDimensions;i++){
        let newCell = document.createElement("div");
        newCell.classList.add("gridItem");
        grid.appendChild(newCell);
    }
    
    return

}

let gridSize = 8;
let grid = document.getElementById('grid');
setGrid(gridSize);