const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bombe') {
    return userInput;
  } else {
    console.log('Error')
  }
}
const getComputerChoice = () => {
 const number = Math.floor(Math.random()*3);
  if(number === 0) {
    return 'rock';
  } else if (number === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
const determineWinner = (userChoice, computerChoice) => {

  if (userChoice === computerChoice) {
    return 'Tie !';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'the computer won';
    } else {
      return 'user won';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'the computer won';
    } else {
      return 'user won';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'the computer won';
    } else {
      return 'user won';
    }
  }
  if (userChoice === 'bombe') {
    if (computerChoice === 'rock') {
      return 'i destroy you';
    } else if (computerChoice === 'paper') {
      return 'i destroy you'; 
    } else {
      return 'i destroy you';
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bombe');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame();