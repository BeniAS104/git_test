const choices = ['Rock', 'Paper', 'Scissors'];

const playerDisplay = document.querySelector(".playerDisplay");
const computerDisplay = document.querySelector(".computerDisplay");
const resultDisplay = document.querySelector(".resultDisplay");

const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
const computerScoreDisplay = document.querySelector(".computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;  // Flag to check if the game is over

const buttons = document.querySelectorAll(".btn");

function playGame(playerChoice) {
    if (isGameOver) {
        return; // Stop the game if it's over
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a tie! No one gets points.";
    } else {
        switch(playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "You Win!" : "You Lose!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "You Win!" : "You Lose!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // Update the score before checking for a winner
    if (result === "You Win!") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "You Lose!") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    // Use setTimeout to introduce a delay before checking for the winner
    setTimeout(checkForWinner, 500); // 500ms delay
}

function checkForWinner() {
    if (isGameOver) return; // Prevent further checks if game is already over

    if (playerScore === 5 || computerScore === 5) {
        isGameOver = true;  // Set the game over flag
        // Disable buttons to prevent further play
        buttons.forEach(button => button.disabled = true);

        const playAgain = confirm("Do you want to play again?");
        if (playAgain) {
            resetScores();
        } else {
            disableButtonsPermanently();
        }
    }
}


function resetScores() {
    playerScore = 0;
    computerScore = 0;
    isGameOver = false;  // Reset the game over flag
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "";  // Reset the result display as well
    playerDisplay.textContent = "You:";
    computerDisplay.textContent = "Computer:";

    // Re-enable the buttons after reset
    buttons.forEach(button => button.disabled = false);
}

function disableButtonsPermanently() {
    buttons.forEach(button => {
        button.disabled = true;
        button.removeEventListener("click", playGame);
    });
}

