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
// Get elements from HTML
const usernameInput = document.getElementById("username");
const displayUsername = document.getElementById("display-username");
const roundsPlayed = document.getElementById("rounds-played");
const wins = document.getElementById("wins");
const losses = document.getElementById("losses");
const draws = document.getElementById("draws");
const scoreMessage = document.getElementById("score-message");

// Initialize game variables
let userScore = 0;
let computerScore = 0;
let drawScore = 0;
let userChoice;
let computerChoice;
let round = 1;
let consecutiveWins = 0;
let consecutiveLosses = 0;
let consecutiveDraws = 0;

// Function to play the game
function playGame(userChoice) {
  // Get computer choice
  const choices = ["rock", "paper", "scissors"];
  computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Determine winner
  if (userChoice === computerChoice) {
    drawScore++;
    consecutiveDraws++;
    scoreMessage.textContent = "It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors
