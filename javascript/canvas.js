class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext('2d');
    this.secretWord = secretWord;
    this.hangmanParts = ['head', 'body', 'rightArm', 'rightHand', 'leftArm', 'leftHand', 'rightLeg', 'rightFoot', 'leftLeg', 'leftFoot'];
    this.context.strokeStyle = 'black';
    this.context.textAlign = 'center';
    this.context.font = '48px Georgia';

  }

  createBoard() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLines() {
    // ... your code goes here
  }

  writeCorrectLetter(index) {
    // ... your code goes here
  }

  writeWrongLetter(letter, errorsLeft) {
    // ... your code goes here
  }

  drawHangman(errorsLeft) {
    // ... your code goes here
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}
