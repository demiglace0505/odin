let playerScore = 0;
let compScore = 0;
// let round = 1;

const computerPlay = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    };
};

const playRound = (player) => {
    const computer = computerPlay().toLowerCase();
    console.log(player, computer)
    
    // win
    if ( 
        player === 'rock' && computer === 'scissors' ||
        player === 'paper' && computer === 'rock' ||
        player === 'scissors' && computer === 'paper'
    ) {
        playerScore++;
        p.innerText = `Win! ${player} beats ${computer}, Score: ${playerScore} - ${compScore}` ;
        return;
        
    };

    // lose
    if ( 
        player === 'rock' && computer === 'paper' ||
        player === 'paper' && computer === 'scissors' ||
        player === 'scissors' && computer === 'rock'
    ) {
        
        compScore++;
        p.innerText = `Lose! ${player} loses to ${computer}, Score: ${playerScore} - ${compScore}` ;
        return
    };

    // draw
    if ( 
        player === 'rock' && computer === 'rock' ||
        player === 'paper' && computer === 'paper' ||
        player === 'scissors' && computer === 'scissors'
    ) {
        p.innerText = `Draw! Score: ${playerScore} - ${compScore}` ;
        return
    };

}

// const game = () => {

//     for (let round = 1; round < 6 ; round++) {
//         console.log(playRound(round));
//     };
// };


const div = document.querySelector('.container');
const p = document.querySelector('#status')

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');


rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
