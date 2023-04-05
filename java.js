const container = document.querySelector('.container')

for (let i = 1; i <= 256; i++) {
    const grid = document.createElement('div')
    grid.className = 'grid'
    container.appendChild(grid)    
}

/* grid.addEventListener('mouseover', function(e) {
    if (e.target.idList !== 'sketch') {
        e.target.addId('sketch')
    }
})

function changeColor() {

}
