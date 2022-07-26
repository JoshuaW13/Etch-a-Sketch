function setGrid(gridDimensions){
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${gridDimensions}, 1fr)`;
    for(let i =0;i<gridDimensions*gridDimensions;i++){
        let newCell = document.createElement("div");
        newCell.classList.add("gridItem");
        grid.appendChild(newCell);
    }
    
    return

}

function changeGridSize(e){
    if(this.classList.contains('8x8')){setGrid(8);}
    else if(this.classList.contains('16x16')){setGrid(16);}
    else if(this.classList.contains('32x32')){setGrid(32);}
}

let sizes = document.querySelectorAll(".gridSize");
sizes.forEach(size => size.addEventListener('click', changeGridSize));
let gridSize = 8;
let grid = document.getElementById('grid');
setGrid(gridSize);