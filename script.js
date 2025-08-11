const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioBottom = parseFloat(window.getComputedStyle(mario).bottom);

    if (pipePosition > 0 && pipePosition < 80 && marioBottom < 50) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioBottom}px`;

        mario.src = 'images/ethos.png'; // tetap pakai EthOS
        mario.style.width = '80px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);
