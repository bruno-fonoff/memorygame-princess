//  manipulaçao do DOM

//instanciar a CLASSE
const game = new MemoryGame();

//capturando elemento do HTML
const startScreen = document.getElementById("startScreen");
const inputName = document.getElementById("inputName");
const gameScreen = document.getElementById("gameScreen");
const gameScore = document.getElementById("gameScore");
const playerName = document.getElementById("name");
const points = document.getElementById("points");
const board = document.getElementById("board");
const btnStart = document.getElementById("btnStart");

//adicionar função ao botao JOGAR!
btnStart.addEventListener("click", () => {
  //esconder startScreen
  startScreen.classList.add("hide");
  //moostrar o gameScore
  gameScore.className = "show gameScore";

  game.player = inputName.value; // capturando o valor do INPUT
  playerName.innerText = game.player; // inserindo o valor capturado no HTML

  points.innerText = game.points; //inserindo o numero de tentativas

  game.renderDeck();
  settingUpGame();
});

function settingUpGame() {
  //capturar todas as cardBack
  //add o eventListener

  const allCardsBack = document.querySelectorAll(".cardBack");

  allCardsBack.forEach((cardBack) => {
    cardBack.addEventListener("click", () => {
      const cardFront = cardBack.previousElementSibling;

      cardFront.className = "show cardFront";
      cardBack.className = "hide cardBack";

      game.flipCard(cardFront);
      points.innerText = game.points;
    });
  });
}
