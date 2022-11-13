
    // Your JavaScript goes here!

    const playerText = document.querySelector("#playerText");
    const computerText = document.querySelector("#computerText");
    const resultText = document.querySelector("#resultText");
    const choiceBtns = document.querySelectorAll(".choiceBtn");

    let player;
    let computer;

    choiceBtns.forEach(button => button.addEventListener("click", ()=> {

        player = button.textContent;
        computer = getComputerChoice();
        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = playRound(player, computer);

    }));

    function getComputerChoice(){

        const numberGenerator = Math.floor(Math.random() * 3) + 1;
        let computer = '';

        if (numberGenerator === 1){
            computer = 'Rock';
        }
        if (numberGenerator === 2){
            computer = 'Paper';
        }
        if (numberGenerator === 3){
            computer = 'Scissors';
        }

        return computer;

    }

    function playRound(playerSelection, computerSelection) {

        let result = ''
        if (playerSelection.toLowerCase() ===  computerSelection.toLowerCase()){
        result = 'Even'
        }else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
            result = 'You Lose!'
        }else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors'){
            result = 'You Win!'
        }else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock'){
            result = 'You Win!'
        }else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors'){
            result = 'You Lose!'
        }else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock'){
            result = 'You Lose!'
        }else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper'){
            result = 'You Win!'
        }

        return result
    }
