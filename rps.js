

function computerPlay() {
    let options = ["Rock", "Paper", "Scissor"]
    let choice = options[Math.floor(Math.random()* options.length)]
    return choice;
}



function playerSelection(){
    while (true) {
        let choice = prompt("Rock Paper or Scissor");
        choice = choice[0].toUpperCase()+choice.slice(1).toLowerCase();
        if (choice === "Rock" || choice === "Paper" || choice === "Scissor") {
            return choice
        } 
    }
    
}

function playRound(computerPlay, playerSelection){
    let computerChoice = computerPlay;
    let playerChoice = playerSelection;
    

    if (playerChoice === "Rock" && computerChoice === "Scissor"){
        return "You Win! Rock beats Scissor"
    }else if (computerChoice === "Rock" && playerChoice === "Scissor"){
        return "You Lose! Rock beats Scissor"
    }else if (playerChoice === "Scissor" && computerChoice === "Paper"){
        return "You Win! Scissor beats Paper"
    }else if (computerChoice === "Scissor" && playerChoice === "Paper"){
        return "You Lose! Scissor beats Paper"
    }else if (playerChoice === "Paper" && computerChoice === "Rock"){
        return "You Win! Paper beats Rock"
    }else if (computerChoice === "Paper" && playerChoice === "Rock"){
        return "You Lose! Rock beats Paper"
    }else if (playerChoice === computerChoice) {
        return "draw"
    }
        
}

function game() {
    let rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let draw = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(computerPlay(),playerSelection())
        console.log(result)
        if (result ==="draw") {
            draw += 1;
        }else if (result.split(" ").includes("Win!")) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
    }
    console.log(playerScore, computerScore)
    if (playerScore > computerScore) {
        return "Player win"
    }else {
        return "Computer Win"
    }
}

console.log()
console.log(game())
