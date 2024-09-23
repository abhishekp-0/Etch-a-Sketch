const width=window.innerWidth*0.9;
const height=window.innerHeight*0.8;


const gridContainer = document.getElementById('gridContainer');
const newGridButton = document.getElementById('newGridButton');

// function createGrid(size) {
//     gridContainer.innerHTML = ''; // Clear existing grid
//     const squareSize=Math.floor(Math.min(height,width)/size);
//     for (let i = 0; i < size; i++) {
//         const row = document.createElement('div');
//         row.classList.add('row');
//         gridContainer.appendChild(row);
//         for(let j=0; j<size;j++){
//             const square = document.createElement('div');
//             square.classList.add('square');
//             square.setAttribute("style",`width:${squareSize}px; height:${squareSize}px;`)
//             row.appendChild(square);
//         }
//     }
// }

function createGrid(size) {
    gridContainer.innerHTML = ''; // Clear existing grid
    const squareSize=Math.floor(Math.min(height,width)/size);
    const gridSize=squareSize*size;
    gridContainer.setAttribute("style", `width:${gridSize}px; height:${gridSize}px;`)
    for (let i = 0; i < size*size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute("style", `width:${squareSize-2}px; height:${squareSize-2}px;`)
        gridContainer.appendChild(square);

        let count=1;
        let color=`${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}`;
        square.addEventListener("mouseenter", ()=>{
            square.style.backgroundColor=`rgba(${color},${count/10})`;
            count+=2;
        })
    }


}


// Initial grid creation
createGrid(16);

// Add event listener to the button
newGridButton.addEventListener('click', () => {
    let newSize = parseInt(prompt("Enter new grid size (1-100):"), 10);
    if (newSize >= 1 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid size between 1 and 100.");
    }
});
