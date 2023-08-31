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

let playerCount = 0;
let cpuCount = 0;
function playRound(playerSelection, computerSelection){
        if(playerSelection == computerSelection){
                return "It's a tie"
        }
       
        if(playerSelection == "paper" && computerSelection == "rock" || 
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
        ){ 
            playerCount++
            return`You Win! ${playerSelection} beats ${computerSelection} player: ${playerCount} cpu: ${cpuCount}`    
         }else{
            cpuCount++
            return `You Lose! ${computerSelection}  beats ${playerSelection} cpu: ${cpuCount} player: ${playerCount}`
         }
    }

function game(){
    let playerSelection = prompt("choose rock, paper or scissors.")
        if(options.includes(playerSelection)){
            computerSelection = getComputerChoice(options)
            playRound(playerSelection, computerSelection)
            
        }
 }


 




 let count = 1;
 while(count < 6){
     count++
     game();
     if(count === 6){
        if(playerCount > cpuCount){
            console.log('you win')
            console.log('player count:' + playerCount)
            console.log('cpu count:' + cpuCount)

        }else if(cpuCount > playerCount){ 
            console.log('you lose')
            console.log('player count:' + playerCount)
            console.log('cpu count:' + cpuCount)
        }
    }
    
 }



  
    
