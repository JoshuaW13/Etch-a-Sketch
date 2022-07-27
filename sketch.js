let mouseHeld = false;
document.body.onmousedown = () => (mouseHeld = true);
document.body.onmouseup= () => (mouseHeld = false);
document.body.ondrag= () => (mouseHeld = false)

function setGrid(gridDimensions){
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${gridDimensions}, 1fr)`;
    for(let i =0;i<gridDimensions*gridDimensions;i++){
        let newCell = document.createElement("div");
        newCell.classList.add("gridItem");
        newCell.addEventListener('mouseenter',(e) =>{newCell.style.borderWidth = '5px';changeColor(e);});
        newCell.addEventListener('mouseleave', (e)=>{newCell.style.borderWidth = '1px'});
        newCell.addEventListener('mousedown', changeColor);
        //newCell.addEventListener('mouseleave', removehighlight)
        //newCell.addEventListener('mouseover', cellHover);
        //newCell.addEventListener('mouseout', cellOff);
        
        
        
        grid.appendChild(newCell);
    }
    return

}


function changeColor(e){
    console.log(e.type);
    if(mouseHeld || e.type === 'mousedown'){
        e.target.style.background = 'black'
        e.target.style.border = 'none'
    }

}

function changeGridSize(e){
    if(this.classList.contains('8x8')){setGrid(8);}
    else if(this.classList.contains('16x16')){setGrid(16);}
    else if(this.classList.contains('32x32')){setGrid(32);}
}



//Event listeners to change grid sizes
let sizes = document.querySelectorAll(".gridSize");
sizes.forEach(size => size.addEventListener('click', changeGridSize));



//Setup default grid

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
brown: 10
grey: 11
*/
