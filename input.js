/* 
    specifically handles controls 
*/

let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 }; //because it can't go backwards it has to know where the bit behind it is

window.addEventListener('keydown', e => { //takes arrow key as direction to move
    switch (e.key) {
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break // it's snake, so you cant go backwards
            inputDirection = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break
    }
})

const getInputDirection = () => { //because it's not being exported this has to be manually called by another variable
    lastInputDirection = inputDirection
    return inputDirection
}