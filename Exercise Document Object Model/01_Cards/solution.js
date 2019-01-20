function solve() {
  let playerOneCards = document.querySelectorAll("#player1Div img");
  let playerTwoCards = document.querySelectorAll("#player2Div img");

  for (let i = 0; i < playerOneCards.length; i++) {
    playerOneCards[i].addEventListener("click", addCardPlayerOne);
  }

  for (let i = 0; i < playerTwoCards.length; i++) {
    playerTwoCards[i].addEventListener("click", addCardPlayerTwo);
  }
}
