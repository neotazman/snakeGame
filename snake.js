
const SNAKE_SPEED = 5 //can be changed to alter the difficulty -- only manually right now
const snakeBody = [{ x: 10, y : 11 }]
let newSegments = 0

function updateSnake() { //the function that decide HOW the snake moves
    const moveDirection = getInputDirection() // can't use the same variable because exports don't work
    for(let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    snakeBody[0].x+= moveDirection.x
    snakeBody[0].y+= moveDirection.y
}

function drawSnake(gameBoard) { // puts the snake on the board
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

function expandSnake(amount) { 
    newSegments+= amount
}

function onSnake(position) {
    return snakeBody.some(segment => {
        return equalPositions(segment, position)
    })

}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}