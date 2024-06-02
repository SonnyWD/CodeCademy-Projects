let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Fonction qui retourne un nombre aléatoire entre 0 et 9
const generateTarget = () => {
  return Math.floor(Math.random() * 9)
}

// Fonction qui compare le chifre de l'individu, de l'ordinateur et le chiffre secret
const compareGuesses = (human, computer, target) => {
  if (human === computer) {
    return 'Human wins'
  }
  if (Math.abs(human - target) < Math.abs(computer - target)) {
    return true;
  } else {
    return false;
  }
}

// Fonction pour augmenter le score du gagnant

const updateScore = winner => {
  if (winner === 'human') {
    return humanScore++;
  } else if (winner === 'computer'){
    return computerScore++;
  }
}

// Fonction qui met à jour le nombre de round 

const advanceRound = () => {
  currentRoundNumber++;
}