import { onSnake, expandSnake } from './snake.js'

let food = { x: 10, y: 3 }
const EXPANSION_RATE = 1

function updateFood() { //the function that decide HOW the snake moves
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = { x: 10, y: 20}
    }
}

function drawFood(gameBoard) { // puts the snake on the board
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}


