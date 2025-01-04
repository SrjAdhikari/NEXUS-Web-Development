// DOM element references for the game board, messages, and controls
const board = document.querySelector(".board");
const winningMessage = document.getElementById("winningMessage");
const restartBtn = document.getElementById("restartBtn");

// DOM element references for player indicators
const whiteNinja = document.getElementById("white-ninja");
const redNinja = document.getElementById("red-ninja");

// DOM element references for container elements
const containerZero = document.querySelector('.containerZero');
const containerTwo = document.querySelector('.containerTwo');


// Define the array of winning combinations
// Each sub-array represents indices in the board that must be equal for a win
const winnerArray = [
    [0, 1, 2],                              // Top row
    [3, 4, 5],                              // Middle row
    [6, 7, 8],                              // Bottom row
    [0, 3, 6],                              // Left column
    [1, 4, 7],                              // Middle column
    [2, 5, 8],                              // Right column
    [0, 4, 8],                              // Diagonal from top-left to bottom-right
    [2, 4, 6]                               // Diagonal from top-right to bottom-left
];


// Initialize the game board (9 cells, each initially empty)
let boardArray = new Array(9).fill("");

// Initially, player "O" starts the game
let turn = "O";

// Add the "active" class to the "O" player, indicating it's their turn
whiteNinja.classList.add('active');

// Counter to track the total number of turns used to detect a draw
let turnCount = 0;


// Function to check if there is a winner based on the current board state
const checkWinner = () => {
    // Loop through each winning combination in the `winnerArray`
    for (let [zeroIndex, firstIndex, secondIndex] of winnerArray) {
        // Check if all three positions have the same value (and are not empty)
        if (
            boardArray[zeroIndex] !== "" &&
            boardArray[zeroIndex] === boardArray[firstIndex] &&
            boardArray[firstIndex] === boardArray[secondIndex]
        ) {
            return true;
        }
    }
    return false;
};


// Function to update the UI to reflect the active player
const activePlayer = () => {
    if (turn === "O") {
        whiteNinja.classList.add("active");
        redNinja.classList.remove("active");
    } 
    else {
        redNinja.classList.add("active");
        whiteNinja.classList.remove("active");
    }
};


// Main game logic function that handles player moves
const gameLogic = (e) => {
    // Get the clicked cell in the game board
    const element = e.target;

    // Check if the clicked cell is empty before making a move
    if (boardArray[element.id] === "") {
        // Increment the turn counter
        turnCount++; 

        // If it's "O"'s turn
        if (turn === "O") {
            // Display "O" in the clicked cell
            element.innerHTML = "O";

            // Update the boardArray with player "O"'s move
            boardArray[element.id] = "O";

            // Check if "O" has won
            if (checkWinner()) {
                winningMessage.innerHTML = "White Ninja Wins !!!";
                whiteNinja.classList.add("winner");

                // Stop the game by removing the event listener
                board.removeEventListener("click", gameLogic);
                return;
            }

            // Switch to "X"'s turn
            turn = "X";
            activePlayer();
        } 
        // If it's "X"'s turn
        else {
            // Display "X" in the clicked cell
            element.innerHTML = "X";

            // Update the boardArray with player "X"'s move
            boardArray[element.id] = "X";

            // Check if "X" has won
            if (checkWinner()) {
                winningMessage.innerHTML = "Red Ninja Wins !!!";
                redNinja.classList.add("winner");

                // Stop the game by removing the event listener
                board.removeEventListener("click", gameLogic);
                return;
            }

            // Switch to "O"'s turn
            turn = "O";
            activePlayer();
        }

        // Check for a draw condition
        // If all cells are filled and no winner, it's a draw
        if (turnCount === 9 && !checkWinner()) {
            winningMessage.innerHTML = "Match Draw !!!";
            whiteNinja.classList.remove("active");
            redNinja.classList.remove("active");
            board.removeEventListener("click", gameLogic);
        }
    }
};

// Add event listener to the game board to handle player clicks
board.addEventListener("click", gameLogic);


// Add event listener to the restart button to reset the game
restartBtn.addEventListener("click", () => {
    // Reset the board state
    boardArray.fill("");                        // Clear the board array (state)
    turn = "O";                                 // Reset the turn to "O"
    turnCount = 0;                              // Reset the turn counter

    // Clear all the cells in the game board visually
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        // Remove "X" or "O" from each cell
        cell.innerHTML = "";
    });

    // Re-enable the game by adding the event listener again
    board.addEventListener("click", gameLogic);

    // Clear the winning or draw message
    winningMessage.innerHTML = "";

    // Remove the "winner" class from both containers
    whiteNinja.classList.remove("winner");
    redNinja.classList.remove("winner");

    // Reset the active player indicator
    activePlayer();
});