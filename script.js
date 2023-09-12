const naoButton = document.getElementById('naoButton');
const simButton = document.getElementById('simButton');
const mensagem = document.getElementById('mensagem');

naoButton.addEventListener('mouseenter', () => {
    moveButtonRandomly();
});

function moveButtonRandomly() {
    const maxX = window.innerWidth - naoButton.clientWidth;
    const maxY = window.innerHeight - naoButton.clientHeight;

    naoButton.style.transition = 'none';

    const jumpX = Math.random() * maxX;
    const jumpY = Math.random() * maxY;

    naoButton.style.transform = `translate(${jumpX}px, ${jumpY}px)`;

    setTimeout(() => {
        moveButtonRandomly();
    }, 100);
}

naoButton.addEventListener('mouseleave', () => {
    naoButton.style.transition = 'transform 0.5s ease-in-out';
});

simButton.addEventListener('click', () => {
    simButton.classList.add('button-animation');
    setTimeout(() => {
        simButton.classList.remove('button-animation');
        mensagem.textContent = 'Parabéns pela sua escolha, você vai ser muito feliz!';
        mensagem.classList.remove('hidden');
    }, 500);
});


