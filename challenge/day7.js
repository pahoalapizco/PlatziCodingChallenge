const rockPaperScissors = ['rock', 'paper','scissors'];

const message = ` Chose One, 
  rock: 0
  paper: 1
  scissors: 2
`;

const game = (playerOne, playerTwo) => {
  const pOneChose = prompt(message);
  const pTwoChose =  Math.floor(Math.random() * 3);
  
  playerOne.chose = rockPaperScissors[pOneChose];
  playerTwo.chose = rockPaperScissors[pTwoChose];

  console.log(`Player One: ${playerOne.chose} - Player Two: ${playerTwo.chose}`);

  if (playerOne.chose === playerTwo.chose) {
    return game(playerOne, playerTwo);
  }
  if(playerOne.chose === 'rock' && playerTwo.chose === 'scissors') {
    playerOne.wins += 1;
  } 
  if (playerOne.chose === 'scissors' && playerTwo.chose === 'paper') {
    playerOne.wins += 1;
  }
  if (playerOne.chose === 'paper' && playerTwo.chose === 'rock') {
    playerOne.wins += 1;
  }
  if( playerTwo.chose === 'rock' && playerOne.chose === 'scissors') {
    playerTwo.wins += 1;
  } 
  if (playerTwo.chose === 'scissors' && playerOne.chose === 'paper') {
    playerTwo.wins += 1;
  }
  if (playerTwo.chose === 'paper' && playerOne.chose === 'rock') {
    playerTwo.wins += 1;
  }

  if(playerOne.wins === 2 || playerTwo.wins === 2) {
    return playerOne.wins === 2 ? 'Player One WINS!!' : 'Player Two WINS!!';
  } else {
    return game (playerOne, playerTwo);
  }
}

const playerOne = {
  chose: '',
  wins: 0
};

const playerTwo = {
  chose: '',
  wins: 0
};

console.log(game (playerOne, playerTwo));