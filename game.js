import{update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js';
import {update as updateFood, draw as drawFood} from './food.js'
import { outSideGrid} from './grid.js'


let lasterRenderTime=0
let gameOver=false
const gameBoard=document.getElementById('game-board')


function main(currentTime){

    if(gameOver){
        if(confirm('GAME OVER, Press to restart')){
            window.location = '/'
        }
        return 
    }
    window.requestAnimationFrame(main)
    const secondsSinceLastRender=(currentTime - lasterRenderTime)/1000

    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    lasterRenderTime=currentTime

    update()
    draw()

}

window.requestAnimationFrame(main);

function update(){
    updateSnake()
    updateFood()
    checkDeath();
}

function draw(){
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
function checkDeath(){
    gameOver= outSideGrid(getSnakeHead()) || snakeIntersection()

}