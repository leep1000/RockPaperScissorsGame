/*
I want to create simple rock paper scissors game vs the computer.
The user must select a username before they can play the game.
The html will have 3 buttons for rock paper and scissors. The buttons will look like emojis for rock, paper and scissors.
There will also be a button that the user can press to play the game again, and another button close to the play again button that will reset the score. 
There will also be another button that will stop the game and display the score.
The user will click on one of the 3 buttons to play the game. The computer will randomly choose one of the 3 buttons. The user will win if they choose the button that beats the computer's choice. The user will lose if they choose the button that loses to the computer's choice. The user will tie if they choose the same button as the computer.
The user will be able to see the score of the game and the amount of rounds they have played after each round. The score will be displayed in the html. 
The user will receive a special message if they win 3 rounds in a row. The user will receive a special message if they lose 3 rounds in a row. The user will receive a special message if they draw 3 rounds in a row.
*/
// Define global variables
// defining the variablesx and their values at that start of the game.
// Also defines winning combinations of variable
let score = 0;
let roundsPlayed = 0;
let consecutiveWins = 0;
let consecutiveLosses = 0;
let consecutiveDraws = 0;
const winningCombos = {
	'rock': 'scissors',
	'paper': 'rock',
	'scissors': 'paper'
};

// Play function when user clicks on one of the buttons
function play(userChoice) {
	// Generate computer choice randomly
	const choices = ['rock', 'paper', 'scissors'];
	const computerChoice = choices[Math.floor(Math.random() * choices.length)];

	// Determine winner and update score
	if (userChoice === computerChoice) {
		consecutiveDraws++;
		showSpecialMessage('draw');
	} else if (winningCombos[userChoice] === computerChoice) {
		score++;
		consecutiveWins++;
		showSpecialMessage('win');
	} else {
		score--;
		consecutiveLosses++;
		showSpecialMessage('lose');
	}

	// Update rounds played counter and display score
	roundsPlayed++;
	document.getElementById('score').innerText = score;
	document.getElementById('rounds-played').innerText = roundsPlayed;
	checkConsecutiveGames();
}

// Function to check for consecutive wins, losses, or draws
function checkConsecutiveGames() {
	if (consecutiveWins === 3) {
		showSpecialMessage('consecutiveWins');
	} else if (consecutiveLosses === 3) {
		showSpecialMessage('consecutiveLosses');
	} else if (consecutiveDraws === 3) {
		showSpecialMessage('consecutiveDraws');
	} else {
		return;
	}
}

// Function to show special messages for consecutive wins, losses, or draws
function showSpecialMessage(messageType) {
	const messageElement = document.getElementById('special-message');
	switch (messageType) {
		case 'win':
			messageElement.innerText = 'You won!';
			break;
		case 'lose':
			messageElement.innerText = 'You lost!';
			break;
		case 'draw':
			messageElement.innerText = 'It\'s a tie!';
			break;
		case 'consecutiveWins':
			messageElement.innerText = 'Wow, you\'ve won 3 times in a row!';
			break;
		case 'consecutiveLosses':
			messageElement.innerText = 'Oops, you\'ve lost 3 times in a row.';
			break;
		case 'consecutiveDraws':
			messageElement.innerText = 'You\'ve drawn 3 times in a row.';
			break;
		default:
			messageElement.innerText = '';
			break;
	}
}

// Function to reset the score. Every variable goes back to their original value once this function is called
function resetScore() {
	score = 0;
	roundsPlayed = 0;
	consecutiveWins = 0;
	consecutiveLosses = 0;
	consecutiveDraws = 0;
	document.getElementById('score').innerText = score;
	document.getElementById('rounds-played').innerText = roundsPlayed;
	document.getElementById('special-message').innerText = '';
}

// Function to play the game again
function playAgain() {
	document.getElementById('special-message').innerText = '';
    consecutiveWins = 0;
    consecutiveLosses = 0;
    consecutiveDraws = 0;

}

// Function to end the game
function endGame() {
	alert('Final score: ' + score + '\nRounds played: ' + roundsPlayed);
	resetScore();
}

const usernameInput = document.getElementById("username");
const confirmButton = document.getElementById("confirm-username");
const greeting = document.getElementById("greeting");

confirmButton.addEventListener("click", () => {
    if (usernameInput.value) {
      greeting.textContent = `Let's play, ${usernameInput.value}!`;
    } else {
      greeting.textContent = "Ready?";
    }
  });

