
const SNAKE_SPEED = 2
const snakeBody = [
    { x: 10, y : 11 },
    { x: 11, y : 11 },
    { x: 12, y : 11 },
    { x: 13, y : 11 },
]

function updateSnake() {
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x+= 1
    snakeBody[0].y+= 0
}

function drawSnake(gameBoard) {
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}


