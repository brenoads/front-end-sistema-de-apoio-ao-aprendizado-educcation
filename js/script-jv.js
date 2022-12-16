const X_CLASS = "x";
const CIRCULO_CLASS = "circulo";

const combinacoes_vencedores = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const elementosQuadrados = document.querySelectorAll("[data-quadrado]");
const msgElemento = document.getElementById("msgCampeao");
const msgVencedor = document.querySelector("[data-texto-vencedor]");
const butaoRestart = document.getElementById("jogarNovamente");
let turnoCirculo;

startGame();

butaoRestart.addEventListener("click", startGame);

function startGame() {
  turnoCirculo = false;
  elementosQuadrados.forEach(quadrado => {
    quadrado.classList.remove(X_CLASS);
    quadrado.classList.remove(CIRCULO_CLASS);
    quadrado.removeEventListener("click", handleClick);
    quadrado.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  msgElemento.classList.remove("show");
}

function fimGame(empate) {
  empate
    ? (msgVencedor.innerText = "Empate!")
    : (msgVencedor.innerText = `${turnoCirculo ? "O" : "X"} Venceu!`);
  msgElemento.classList.add("show");
}

function handleClick(e) {
  const quadrado = e.target;
  const classeAtual = turnoCirculo ? CIRCULO_CLASS : X_CLASS;
  porMarcador(quadrado, classeAtual);
  if (verifcaVencedor(classeAtual)) {
    fimGame(false);
  } else if (foiEmpate()) {
    fimGame(true);
  } else {
    trocaTurnos();
    setBoardHoverClass();
  }
}

function foiEmpate() {
  return [...elementosQuadrados].every(quadrado => {
    return (
      quadrado.classList.contains(X_CLASS) ||
      quadrado.classList.contains(CIRCULO_CLASS)
    );
  });
}

function porMarcador(quadrado, classeAtual) {
  quadrado.classList.add(classeAtual);
}

function trocaTurnos() {
  turnoCirculo = !turnoCirculo;
}

function setBoardHoverClass() {
  board.classList.remove(CIRCULO_CLASS);
  board.classList.remove(X_CLASS);

  turnoCirculo
    ? board.classList.add(CIRCULO_CLASS)
    : board.classList.add(X_CLASS);
}

function verifcaVencedor(classeAtual) {
  return combinacoes_vencedores.some(combinacao => {
    return combinacao.every(index => {
      return elementosQuadrados[index].classList.contains(classeAtual);
    });
  });
}
