const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
let contadorDePulos = 0;

function atualizarContador() {
  document.getElementById("contadorPulos").textContent = contadorDePulos;
}

const jump = () => {
  mario.classList.add('jump');
  
  setTimeout(() => {
    mario.classList.remove('jump');
    contadorDePulos++;
    atualizarContador();
  }, 500);
};

const loop = setInterval(() => {
  const canoPosition = cano.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
  
  if (canoPosition <= 105 && canoPosition > 0 && marioPosition < 85) {
    cano.style.animation = 'none';
    cano.style.left = `${canoPosition}px`;
    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
    mario.src = 'gif mario/morte.webp';  // pakai folder gif mario
    clearInterval(loop);
    document.getElementById("botaoReiniciar").style.display = "block";
  }
}, 10);

function reiniciarJogo() {
  window.location.reload();
}

function copyContract() {
  const contract = document.getElementById("contract").textContent;
  navigator.clipboard.writeText(contract);
  alert("Contract copied: " + contract);
}

document.addEventListener('keydown', jump);
