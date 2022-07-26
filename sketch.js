function setGrid(gridDimensions){
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${gridDimensions}, 1fr)`;
    for(let i =0;i<gridDimensions*gridDimensions;i++){
        let newCell = document.createElement("div");
        newCell.classList.add("gridItem");
        newCell.addEventListener('mousedown', changeCellColorFirst)
        newCell.addEventListener('mouseup', stopDrag)
        newCell.addEventListener('mouseenter', changeCellColor)
        
        
        grid.appendChild(newCell);
    }

    
    
    return

}

function changeGridSize(e){
    if(this.classList.contains('8x8')){setGrid(8);}
    else if(this.classList.contains('16x16')){setGrid(16);}
    else if(this.classList.contains('32x32')){setGrid(32);}
}

function stopDrag(e){
    mouseHeld = false;
}

function changeCellColor(e){
    if(mouseHeld == true){
        this.style.border = "none";
        if(color == 1){this.style.background = `black`;}

    }
    
}

function changeCellColorFirst(e){
    mouseHeld = true;
    this.style.border = "none";
    if(color == 1){this.style.background = `black`;}
}

//Event listeners to change grid sizes
let sizes = document.querySelectorAll(".gridSize");
sizes.forEach(size => size.addEventListener('click', changeGridSize));



//Setup default grid
let mouseHeld = false;
let gridSize = 8;
let color = 1;
let grid = document.getElementById('grid');
setGrid(gridSize);

/* Color key:
black: 1
white: 2
red: 3
orange: 4
yellow: 5
Green: 6
Blue: 7
Indigo: 8
Violet: 9
*/
