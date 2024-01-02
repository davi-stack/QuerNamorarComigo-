const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const message = document.getElementById('message');

noButton.addEventListener('click', moveButtonRandomly);
noButton.addEventListener('touchstart', moveButtonRandomly);

function moveButtonRandomly() {
    // Use viewport height and width to keep button within screen bounds
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'fixed';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

yesButton.addEventListener('click', () => {
    yesButton.classList.add('button-animation');
    setTimeout(() => {
        yesButton.classList.remove('button-animation');
        message.textContent = 'Parabéns pela sua escolha, você vai ser muito feliz!';
        message.classList.remove('hidden');
    }, 500);
});
