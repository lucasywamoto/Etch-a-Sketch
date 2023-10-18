const container = document.querySelector('.container');
const gridBtn = document.querySelector('#grid-btn');
const changeColorBtn = document.querySelectorAll('.change-color-btn');
let color = changeColorBtn[0].id;
let gridSize = 16;

function createGrid(gridSize) {
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        container.appendChild(div);
    
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

        let shade = 0;
    
        div.addEventListener('mouseover', () => {
            if(color === 'default')
                div.style.backgroundColor = 'black';
            else if(color === 'random')
                div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            else if(color === 'grayscale') {
                shade += 0.1;
                div.style.backgroundColor = `rgba(0, 0, 0, ${shade})`;
            }
        });
    }
}

createGrid(gridSize);

gridBtn.addEventListener('click', () => {
    container.innerHTML = '';
    do {
        gridSize = prompt('Enter a number between 1 and 100', gridSize);
    } while (gridSize < 1 || gridSize > 100);
    createGrid(gridSize);
});

changeColorBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        color = btn.id;
        console.log(color);
    });
});