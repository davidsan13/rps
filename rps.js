

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
}

function domUpdate(result) {
    const container = document.querySelector('.topContainer');
    const div = document.createElement('div');
    container.removeChild(container.childNodes[0])
    div.classList.add('result')
    div.textContent = result;
    container.appendChild(div);
    
}

function createButton(){
    const container = document.querySelector('.container');
        const div = document.createElement('BUTTON');
        div.innerHTML = "reset"
        div.classList.add('reset')
        container.appendChild(div);
}
function reset() {
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

function playRound(){
    let result;
    let computerChoice = computerPlay();
    const choice = this.textContent
    console.log(choice);
    console.log(computerChoice)
    let playerChoice = choice;
    if (playerChoice === "Rock" && computerChoice === "Scissor"){
        result = "You Win! Rock beats Scissor";
    }else if (computerChoice === "Rock" && playerChoice === "Scissor"){
        result = "You Lose! Rock beats Scissor";
    }else if (playerChoice === "Scissor" && computerChoice === "Paper"){
        result = "You Win! Scissor beats Paper";
    }else if (computerChoice === "Scissor" && playerChoice === "Paper"){
        result =  "You Lose! Scissor beats Paper";
        
    }else if (playerChoice === "Paper" && computerChoice === "Rock"){
        result = "You Win! Paper beats Rock";
    }else if (computerChoice === "Paper" && playerChoice === "Rock"){
        result = "You Lose! Rock beats Paper";
    }else if (playerChoice === computerChoice) {
        result = "draw";
       
    }
    domUpdate(result);
    scoreUpdate(result);
    document.getElementById("playerScore").innerHTML =  playerScore
    document.getElementById("computerScore").innerHTML =  computerScore
    console.log(playerScore, computerScore, drawScore)
    
    if (playerScore === 5 || computerScore === 5) {
        const btn= document.querySelectorAll('.btn');
        btn.forEach(function(button) {
            button.disabled = true;
        })
        const container = document.querySelector('.container');
        const div = document.createElement('BUTTON');
        div.innerHTML = "reset"
        div.classList.add('reset')
        container.appendChild(div);
        const resetBtn = document.querySelector('.reset');
        resetBtn.addEventListener("click", reset)
        if(playerScore === 5) {
            domUpdate(`You Win the match. Your score ${playerScore}. Computer score ${computerScore}`)
        } else{
            domUpdate(`You Lose the match. Your score ${playerScore}. Computer score ${computerScore}`)
        }
    }
}
        
    




const btn = document.querySelectorAll('.btn');
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
btn.forEach(function(button) {
    button.addEventListener("click",playRound);
    
})
console.log(playerScore)
//rock.addEventListener("click",playRound);
if (playerScore === 21) {
    console.log(playerScore)
}
/* function game() {
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
*/
//console.log(game())


