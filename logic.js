


let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRenderTime = currentTime

    update()
    draw()
}

function update() {
    updateSnake()
}

function draw() {
    drawSnake(gameBoard)
}

window.requestAnimationFrame(main)