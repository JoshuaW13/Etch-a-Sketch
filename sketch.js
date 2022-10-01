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
        e.target.style.border = 'none'
        if(color === 1){e.target.style.background = 'black';}
        else if(color === 2){e.target.style.background = 'white';}
        else if(color === 3){e.target.style.background = 'red';}
        else if(color === 4){e.target.style.background = 'orange';}
        else if(color === 5){e.target.style.background = 'yellow';}
        else if(color === 6){e.target.style.background = 'green';}
        else if(color === 7){e.target.style.background = '#0047AB';}
        else if(color === 8){e.target.style.background = 'indigo';}
        else if(color === 9){e.target.style.background = 'purple';}
        else if(color === 10){e.target.style.background = '#5C4033';}
        else if(color === 11){e.target.style.background = 'grey';}
        else if(color === 12){
            e.target.style.background = 'white';
            e.target.style.border = 'solid #eae8e4'
            e.target.style.borderWidth = '1px'
        }
        
        
    }

}

function changeGridSize(e){
    if(this.classList.contains('8x8')){setGrid(gridSize = 8);}
    else if(this.classList.contains('16x16')){setGrid(gridSize = 16);}
    else if(this.classList.contains('32x32')){setGrid(gridSize = 32);}
}

function changeBrush(e){
    colors.forEach(function(color){
        color.style.borderWidth = '0px'
    })
    if(this.classList.contains('black')){color = 1;}
    else if(this.classList.contains('white')){color = 2;}
    else if(this.classList.contains('red')){color = 3;}
    else if(this.classList.contains('orange')){color = 4;}
    else if(this.classList.contains('yellow')){color = 5;}
    else if(this.classList.contains('green')){color = 6;}
    else if(this.classList.contains('blue')){color = 7;}
    else if(this.classList.contains('indigo')){color = 8;}
    else if(this.classList.contains('violet')){color = 9;}
    else if(this.classList.contains('brown')){color = 10;}
    else if(this.classList.contains('grey')){color = 11;}
    else if(this.classList.contains('eraser')){color = 12;} 
    this.style.border = 'solid #0096FF';
    this.style.borderWidth = '5px'  ;
}

function clearGrid(){
    setGrid(gridSize);
}




//Event listeners to change grid sizes
let sizes = document.querySelectorAll(".gridSize");
sizes.forEach(size => size.addEventListener('click', changeGridSize));



//Setup default grid

let gridSize = 8;
let color = 1;
let grid = document.getElementById('grid');
setGrid(gridSize);
let colors = document.querySelectorAll('.color');
colors.forEach(color => color.addEventListener('click', changeBrush))
let clear = document.querySelector('.clear');
clear.addEventListener('click', clearGrid)

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
