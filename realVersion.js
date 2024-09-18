const choices = ['Rock', 'Paper', 'Scissors'];

const playerDisplay = document.querySelector(".playerDisplay");
const computerDisplay = document.querySelector(".computerDisplay");
const resultDisplay = document.querySelector(".resultDisplay");

const playerScoreDisplay = document.querySelector(".playerScoreDisplay");
const computerScoreDisplay = document.querySelector(".computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;
let isGameOver = false;  // flag to check if the game is over

const buttons = document.querySelectorAll(".btn");

function playGame(playerChoice) {
    if (isGameOver) {
        return; // stop game if it's over
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = "";

    if (playerChoice === computerChoice) {
        result = "This round's outcome: It's a tie! No one gets points.";
    } else {
        switch(playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "This round's outcome: You Win!" : "This round's outcome: You Lose!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "This round's outcome: You Win!" : "This round's outcome: You Lose!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "This round's outcome: You Win!" : "This round's outcome: You Lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // update score before checking for a winner
    if (result === "This round's outcome: You Win!") {
        playerScore++;
        playerScoreDisplay.textContent = ` ${playerScore}`;
    } else if (result === "This round's outcome: You Lose!") {
        computerScore++;
        computerScoreDisplay.textContent = ` ${computerScore}`;
    }

    // setTimeout to introduce a delay before checking for the winner
    setTimeout(checkForWinner, 500); // 500ms delay
}

function checkForWinner() {
    if (isGameOver) return; // prevent checks if game is already over

    if (playerScore === 5 || computerScore === 5) {
        isGameOver = true;  // set the game over flag
        // disable buttons to prevent further play
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
    isGameOver = false;  // reset the game over flag
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = "";  
    playerDisplay.textContent = "You:";
    computerDisplay.textContent = "Computer:";

    // re-enable buttons after reset
    buttons.forEach(button => button.disabled = false);
}

function disableButtonsPermanently() {
    buttons.forEach(button => {
        button.disabled = true;
        button.removeEventListener("click", playGame);
    });
}

