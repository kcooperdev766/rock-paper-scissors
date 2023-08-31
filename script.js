const options = ['rock','paper','scissors'];


//ultity functions
function getRandomChoiceFromArr(arr){
    if(arr && arr.length){
        return arr[Math.floor(Math.random() * arr.length)]
    }
}


function getComputerChoice (arr){
    return getRandomChoiceFromArr(arr)
}


function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
            return "It's a tie"
    }
     if(playerSelection == "rock" && computerSelection == "paper" ){    
           return "You Lose! Paper beats Rock "
        }else if(playerSelection == "rock" && computerSelection == "scissors"){
           return "You Win! Rock beats Scissors "
        }

    if(playerSelection == "paper" && omputerSelection == "rock"){    
            return  "You Win! Paper beats Rock "
        }else if(computerSelection == "scissors" && playerSelection == "paper" ){
            return"You Lose! Scissors beats Paper "
        }

    if(playerSelection == "scissors" && computerSelection == "rock"){    
            return "You Win! Rock beats Scissors "
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
            return"You Lose! Scissors beats Paper "
        }
    }

const playerSelection = "rock";
console.log(`You selected ${playerSelection}`)
const computerSelection = getComputerChoice(options);
console.log(`CPU selected ${computerSelection}`)
console.log(playRound(playerSelection, computerSelection));