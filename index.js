// criar canvas
const canvasEl = document.querySelector("canvas"),
  canvasCtx = canvasEl.getContext("2d");

const lineWidth = 15;

function setup() {
  //define largura da tela (window) captura a largura
  canvasEl.width = canvasCtx.width = window.innerWidth;
  canvasEl.height = canvasCtx.height = window.innerHeight;
}

function draw() {
  // fillRect(eixoX, eixoY Largura, Altura)

  // cria o campo
  canvasCtx.fillStyle = "#286047";
  canvasCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);

  // cria a linha central
  canvasCtx.fillStyle = "#ffffff";

  const x = window.innerWidth / 2 - lineWidth / 2;
  const y = 0;
  const w = lineWidth;
  const h = window.innerHeight;

  canvasCtx.fillRect(x, y, w, h);

  // cria a raquete esquerda
  canvasCtx.fillRect(10, 350, lineWidth, 150);

  // cria a raquete direita
  canvasCtx.fillRect(window.innerWidth - lineWidth - 10, 350, lineWidth, 150);

  // cria bolinha
  canvasCtx.beginPath();
  canvasCtx.arc(200, 300, 12, 0, 2 * Math.PI);
  canvasCtx.fill();

  // desenho placar
  canvasCtx.font = "bold 72px Arial";
  canvasCtx.textAlign = "center";
  canvasCtx.textBaseline = "top";
  canvasCtx.fillStyle = "#01341d";
  canvasCtx.fillText("3", window.innerWidth / 4, 50);
  canvasCtx.fillText("2", window.innerWidth / 4 + window.innerWidth / 2, 50);
}

setup();
draw();
