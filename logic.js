
let lastRenderTime = 0
const SNAKE_SPEED = 2

function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return


    lastRenderTime = currentTime
    console.log('render')

    update()
    draw()
}

function update() {

}

function draw() {

}

window.requestAnimationFrame(main)