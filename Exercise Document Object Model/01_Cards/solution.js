function solve() {
  let playerOneCards = document.querySelectorAll("#player1Div img");
  let playerTwoCards = document.querySelectorAll("#player2Div img");
  let result = document.getElementById("result");
  let playerOneSpan = document.getElementsByTagName("span")[0];
  let playerTwoSpan = document.getElementsByTagName("span")[2];
  let hand = [];
  let history = [];

  for (let i = 0; i < playerOneCards.length; i++) {
    playerOneCards[i].addEventListener("click", addCardPlayerOne);
  }

  for (let i = 0; i < playerTwoCards.length; i++) {
    playerTwoCards[i].addEventListener("click", addCardPlayerTwo);
  }

  function addCardPlayerOne() {
    let cardName = this.name;
    this.src = "images/whiteCard.jpg";
    playerOneSpan.innerText = cardName;
    console.log(event).target;
    showResult();
  }

  function addCardPlayerTwo() {
    let cardName = this.name;
    this.src = "images/whiteCard.jpg";
    playerTwoSpan.innerText = cardName;
    showResult();
  }

  function showResult() {
    if (
      playerOneSpan.innerText.length > 0 &&
      playerTwoSpan.innerText.length > 0
    ) {
      playerOneCard = Number(playerOneSpan.innerText);
      playerTwoCard = Number(playerTwoSpan.innerText);
      console.log(this);
      if (playerOneCard > playerTwoCard) {
        playerOneSpan.style.border = "2px solid green";
        playerTwoSpan.style.boder = "2px solid darkred";
      } else {
        playerTwoSpan.style.border = "2px solid green";
        playerOneSpan.style.border = "2px solid darkred";
      }
      history.push(playerOneCard + " vs " + playerTwoCard);
    }
    console.log(history);
  }
}
