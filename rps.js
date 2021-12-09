

function computerPlay() {
    let options = ["Rock", "Paper", "Scissor"]
    let choice = options[Math.floor(Math.random()* options.length)]
    return choice;
}



function playerSelection(user){
    while (true) {
        // let choice = prompt("Rock Paper or Scissor");
        let choice = user;
        choice = choice[0].toUpperCase()+choice.slice(1).toLowerCase();
        if (choice === "Rock" || choice === "Paper" || choice === "Scissor") {
            return choice
        } 
    }
    
}

function scoreUpdate(result) {
    if (result ==="draw") {
        drawScore += 1;
    }else if (result.split(" ").includes("Win!")) {
        playerScore += 1;
    } else {
        computerScore += 1;
    }
    document.getElementById("playerScore").innerHTML =  playerScore
    document.getElementById("computerScore").innerHTML =  computerScore
}

function domUpdate(result) {
    const container = document.querySelector('.topContainer');
    const div = document.createElement('div');
    container.removeChild(container.childNodes[0])
    div.classList.add('result')
    div.textContent = result;
    container.appendChild(div);
}

function createResetButton(){
    const container = document.querySelector('.container');
    const div = document.createElement('BUTTON');
    div.innerHTML = "reset"
    div.classList.add('reset')
    container.appendChild(div);
    const resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener("click", restartGame)
}

function restartGame() {
    const btn= document.querySelectorAll('.btn');
        btn.forEach(function(button) {
            button.disabled = false;
        })
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    const resetBtn = document.querySelector('.reset')
    resetBtn.remove();
}

function disableBtn() {
    const btn= document.querySelectorAll('.btn');
    btn.forEach(function(button) {
        button.disabled = true;
     })
}
function checkRoundResult(playerChoice, computerChoice) {
    if (playerChoice === "Rock" && computerChoice === "Scissor"){
        return "You Win! Rock beats Scissor";
    }else if (computerChoice === "Rock" && playerChoice === "Scissor"){
        return "You Lose! Rock beats Scissor";
    }else if (playerChoice === "Scissor" && computerChoice === "Paper"){
        return "You Win! Scissor beats Paper";
    }else if (computerChoice === "Scissor" && playerChoice === "Paper"){
        return "You Lose! Scissor beats Paper";  
    }else if (playerChoice === "Paper" && computerChoice === "Rock"){
        return"You Win! Paper beats Rock";
    }else if (computerChoice === "Paper" && playerChoice === "Rock"){
        return "You Lose! Rock beats Paper";
    }else if (playerChoice === computerChoice) {
        return "draw";
    }
}

function winner(playerScore, computerScore) {
    if(playerScore === 5) {
        domUpdate(`You wonn the match. Your score ${playerScore}. Computer score ${computerScore}`)
    } else{
        domUpdate(`You lost the match. Your score ${playerScore}. Computer score ${computerScore}`)
    }
}

function playRound(){
    let result;
    let computerChoice = computerPlay();
    const choice = this.textContent
    let playerChoice = choice;
    result = checkRoundResult(playerChoice, computerChoice);
    domUpdate(result);
    scoreUpdate(result);
    if (playerScore === 5 || computerScore === 5) {
        disableBtn();
        createResetButton();
        winner(playerScore, computerScore);
    }
}

const btn = document.querySelectorAll('.btn');
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    btn.forEach(function(button) {
        button.addEventListener("click",playRound);
    })




