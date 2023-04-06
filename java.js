const container = document.querySelector('.container')

for (let i = 1; i <= 256; i++) {
    let grid = document.createElement('div')
    grid.className = 'grid'
    container.appendChild(grid)    
}

let grid = document.querySelectorAll('.grid')
Array.from(grid).forEach(item => item.addEventListener('mouseenter', function(e) {
    e.target.setAttribute('class', 'sketch')
}))
