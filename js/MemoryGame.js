//  CLASSE

class MemoryGame {
  constructor() {
    this.player = "";
    this.points = 2;
    this.deck = [
      "../assets/ariel.jpg",
      "../assets/bela.jpg",
      "../assets/bela_adormecida.jpg",
      // "../assets/branca_de_neve.jpg",

      "../assets/jasmine2.jpg",
      "../assets/mulan.jpg",
      "../assets/pocahontas.jpg",
      // "../assets/rapunzel.jpg",
      //repetindo cartas
      "../assets/ariel.jpg",
      "../assets/bela.jpg",
      "../assets/bela_adormecida.jpg",
      // "../assets/branca_de_neve.jpg",
      // "../assets/cinderela.jpg",
      "../assets/jasmine2.jpg",
      "../assets/mulan.jpg",
      "../assets/pocahontas.jpg",
      // "../assets/rapunzel.jpg",
    ];
    this.selectedCards = [];
  }

  renderDeck() {
    //randomizar o deck
    this.deck.sort(() => {
      return Math.random() - 0.5;
    });

    //capturar o board
    const board = document.getElementById("board");
    //iterar pela array do deck e criar as cartas
    this.deck.forEach((element) => {
      const imgFront = document.createElement("img"); // criando tag <img />
      imgFront.src = element; //setando src da img ("../assets/ariel.jpg")
      imgFront.className = "hide cardFront"; // setando class HIDE para esconder, e criando class para estilizar.

      const imgBack = document.createElement("img"); // criando tag <img />
      imgBack.src = "../assets/logo.jpg"; //setando src da img ("../assets/ariel.jpg")
      imgBack.className = "show cardBack"; // setando class da img
      board.appendChild(imgFront); // colocando tag criada dentro da DIV "board"
      board.appendChild(imgBack); // colocando tag criada dentro da DIV "board"
    });
  }

  flipCard(card) {
    this.selectedCards.push(card); //insere carta selecionada na array de cartas selecionadas
    // condição para checar se 2 cartas foram selecionadas
    if (this.selectedCards.length === 2) {
      console.log("duas cartas viradas");
      this.checkPair();
    }
  }

  checkPair() {
    if (this.selectedCards[0].src === this.selectedCards[1].src) {
      console.log("cartas iguais!!!");
      this.selectedCards[0].classList.add("turn"); //add class "VIRADA"
      this.selectedCards[1].classList.add("turn"); //add class "VIRADA"
      this.selectedCards = []; //limpando arrays caso as cartas sejam iguais
      this.checkStatus();
    } else {
      console.log("cartas diferentes!");
      this.points--; //remove ponto do jogador
      setTimeout(() => {
        this.selectedCards[0].className = "hide cardFront"; //desvirando (escondendo) carta
        this.selectedCards[1].className = "hide cardFront"; //desvirando (escondendo) carta
        this.selectedCards[0].nextElementSibling.className = "show cardBack"; // mostrando cardBack
        this.selectedCards[1].nextElementSibling.className = "show cardBack"; //mostrando cardBack
        this.selectedCards = []; //limpando array de cartas selecionadas
      }, 1000);

      this.checkStatus();
    }
  }

  checkStatus() {
    console.log("Checando");
    if (this.points === 0) {
      alert(`${this.player}, você perdeu! Tente novamente!`);
      // Location.reload();
      console.log("Você Perdeu!");
    }
    const cardsTurn = document.querySelectorAll(".turn");
    if (cardsTurn.length === this.deck.length) {
      alert(`${this.player}, você VENCEU!`);
    }
  }
}
