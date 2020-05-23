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

const playRound = (round) => {
    const player = window.prompt('Rock, Paper or Scissors?').toLowerCase();
    const computer = computerPlay().toLowerCase();
    
    console.log(`Round ${round}:`, player, computer);

    // win
    if ( 
        player === 'rock' && computer === 'scissors' ||
        player === 'paper' && computer === 'rock' ||
        player === 'scissors' && computer === 'paper'
    ) {
        
        playerScore++;
        return `You Win! ${player} beats ${computer}, ${playerScore} - ${compScore}`
        
    };

    // lose
    if ( 
        player === 'rock' && computer === 'paper' ||
        player === 'paper' && computer === 'scissors' ||
        player === 'scissors' && computer === 'rock'
    ) {
        
        compScore++;
        return `You Lose! ${player} loses to ${computer}, ${playerScore} - ${compScore}`
    };

    // draw
    if ( 
        player === 'rock' && computer === 'rock' ||
        player === 'paper' && computer === 'paper' ||
        player === 'scissors' && computer === 'scissors'
    ) {
        return `Draw! ${playerScore} - ${compScore}`
    };

    return `invalid input!`
}

const game = () => {

    for (let round = 1; round < 6 ; round++) {
        console.log(playRound(round));
    };
};


// GAME START
game();