let playerScore = 0;
let compScore = 0;
let round = 0;
// let round = 1;

const computerPlay = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    };
};

const roundResults = (player, computer) => {
    // win
    if (
        player === 'rock' && computer === 'scissors' ||
        player === 'paper' && computer === 'rock' ||
        player === 'scissors' && computer === 'paper'
    ) {
        playerScore++;
        round++;
        mainTitle.innerText = `Round ${round}: Win! ${player} beats ${computer}, Score: ${playerScore} - ${compScore}`;
        return;
    };

    // lose
    if (
        player === 'rock' && computer === 'paper' ||
        player === 'paper' && computer === 'scissors' ||
        player === 'scissors' && computer === 'rock'
    ) {

        compScore++;
        round++;
        mainTitle.innerText = `Round ${round}: Lose! ${player} loses to ${computer}, Score: ${playerScore} - ${compScore}`;
        return
    };

    // draw
    if (
        player === 'rock' && computer === 'rock' ||
        player === 'paper' && computer === 'paper' ||
        player === 'scissors' && computer === 'scissors'
    ) {
        round++;
        mainTitle.innerText = `Round ${round}: Draw! Score: ${playerScore} - ${compScore}`;
        return
    };
}

const checkScores = () => {
    if (playerScore >= 5) {
        mainTitle.innerText = `You won! ${playerScore} - ${compScore}. The game took ${round} rounds.`
        mainHero.classList.add('is-primary');
        mainHero.classList.remove('is-dark');
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    };
    if (compScore >= 5) {
        mainTitle.innerText = `You lose! ${playerScore} - ${compScore}. The game took ${round} rounds.`
        mainHero.classList.add('is-danger');
        mainHero.classList.remove('is-dark');
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    };
};

const playRound = (player) => {
    const computer = computerPlay().toLowerCase();
    console.log(player, computer)

    roundResults(player, computer);
    checkScores();
};

// const game = () => {

//     for (let round = 1; round < 6 ; round++) {
//         console.log(playRound(round));
//     };
// };

const mainHero = document.querySelector('#mainHero');
const mainTitle = document.querySelector('#mainTitle');
const div = document.querySelector('.container');

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');


rockButton.addEventListener('click', () => playRound('rock'));
paperButton.addEventListener('click', () => playRound('paper'));
scissorsButton.addEventListener('click', () => playRound('scissors'));
