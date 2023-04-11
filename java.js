const container = document.querySelector('.container')
const button = document.querySelector('button')

for (let i = 1; i <= 256; i++) {
    let grid = document.createElement('div')
    grid.className = 'grid'
    container.appendChild(grid)    
}

let grid = document.querySelectorAll('.grid')
Array.from(grid).forEach(item => item.addEventListener('mouseenter', function(e) {
    e.target.setAttribute('id', 'sketch')
}))

button.addEventListener('click', newGrid)

function newGrid() {
    let grid = document.querySelectorAll('.grid')
    Array.from(grid).forEach(grid => container.removeChild(grid))
    let size = prompt('How big you want this grid? Max 100 pls')
    if (isNaN(size)) {
        alert('Has to be a number!')
        return
    }
    if (size > 100) {
        alert('I said <100 pls')
        return
    }
    else for (let i = 0; i < (size * size); i++) {
        let grid = document.createElement('div')
        let height = 500/size;
        let width = 500/size;
        grid.className = 'grid';
        grid.style.height = `${height}px`;
        grid.style.width = `${width}px`;
        grid.style.backgroundColor = 'black'
        let newGrid = document.querySelectorAll('.grid')
        Array.from(newGrid).forEach(item => item.addEventListener('mouseenter', function (e) {
            e.target.setAttribute('id', 'sketch')}))
        container.appendChild(grid)
}}