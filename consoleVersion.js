//BOT LOGIC
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        console.log("Computer: Rock");
        return "Rock";
    } else if (choice === 1) {
        console.log("Computer: Paper");
        return "Paper";
    } else {
        console.log("Computer: Scissors");
        return "Scissors";
    }
}
//HUMAN LOGIC
function getHumanChoice() {
    
    let buttons = document.querySelectorAll(".btn");

   
    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            let choice;
            if (index === 0) {  
                choice = "Rock";
            } else if (index === 1) {  
                choice = "Paper";
            } else if (index === 2) {  
                choice = "Scissors";
            }
            
            console.log("You chose: " + choice);
        });
    });
    return choice;  
}


let humanScore = 0;
let computerScore = 0;

function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
        console.log("It's a draw! Both players gain no points.");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    } else if (
        (humanSelection === "Rock" && computerSelection === "Scissors") ||
        (humanSelection === "Scissors" && computerSelection === "Paper") ||
        (humanSelection === "Paper" && computerSelection === "Rock")
    ) {
        console.log("Congratulations! You won this round.");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        humanScore++;
    } else {
        console.log("Not this time! Computer takes the win!");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        computerScore++;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the great battle with your ${humanScore} points!`);
    } else if (humanScore == computerScore) {
        console.log(`Wow! An unexpected result! A tie between you and the Computer!`);
    } else {
        console.log(`The game goes to the Computer! You'll get the win next time :)`);
    }

    console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);

    let repeat = prompt(`Do you want to play again? Type "yes", if not, type anything else or cancel the prompt. `); 
    
    while (repeat.toLowerCase() === "yes") {
        playGame();
        
    }
    
}

// playGame();




