Snake Game


Overview
This is a simple, browser-based Snake game implemented using HTML, CSS, and JavaScript. The objective of the game is to control a snake to eat food, causing the snake to grow in length. The game ends when the snake collides with itself or the edges of the grid.

How to Play
Controls: Use the arrow keys on your keyboard to control the direction of the snake.
Objective: Guide the snake to eat the red food squares that appear on the grid. Each time the snake eats a piece of food, it grows longer.
Game Over: The game ends if the snake runs into the grid walls or into itself. When the game is over, you'll be prompted to restart.


Files

1. index.html
The main HTML file that sets up the game's structure and styling. 
It includes:
A game board of 21x21 grid cells where the snake and food will be displayed.
Basic styling for the game board, snake, and food elements.


2. snake.js
This file handles the logic for the snake's movement and interaction with the game board:

SNAKE_SPEED: The speed at which the snake moves.
update(): Updates the position of the snake based on user input and adds new segments when the snake eats food.
draw(gameBoard): Renders the snake on the game board.
expandSnake(amount): Increases the snake's length.
onSnake(position, options): Checks if a given position is occupied by the snake.
getSnakeHead(): Returns the position of the snake's head.
snakeIntersection(): Checks if the snake has collided with itself.

3. food.js
This file manages the food logic:

update(): Checks if the snake has eaten the food and generates new food at a random position when eaten.
draw(gameBoard): Renders the food on the game board.
getRandomFoodPosition(): Generates a random position for the food that is not on the snake.

4. grid.js
This file contains utility functions related to the game grid:

randomGridPosition(): Generates a random position within the grid.
outSideGrid(position): Checks if a given position is outside the grid boundaries.

5. game.js
The main game loop is handled here:

main(currentTime): The main loop that updates and draws the game state at a consistent interval.
update(): Calls update functions for the snake and food.
draw(): Calls draw functions for the snake and food.
checkDeath(): Determines if the game is over by checking for collisions.

6. input.js
This file handles user input, specifically the direction in which the snake moves based on keyboard input:
inputDirection: Tracks the current direction of the snake.
lastInputDirection: Tracks the previous direction to prevent the snake from reversing.
getInputDirection(): Returns the current direction of the snake based on the latest arrow key pressed.