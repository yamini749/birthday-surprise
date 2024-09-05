document.querySelector('.gift-box').addEventListener('click', function() {
    const lid = document.querySelector('.lid');
    const message = document.querySelector('.message');
    const sound = document.getElementById('open-sound');
    const birthdayVideo = document.getElementById('birthday-video');

    sound.play();

    // Animate lid to open away from the gift box
    lid.style.transform = 'rotateX(-120deg) translateZ(50px)';

    setTimeout(() => {
        message.style.opacity = 1;
        birthdayVideo.style.display = 'block'; // Show the video
        birthdayVideo.style.opacity = 1; // Fade in the video
        birthdayVideo.play(); // Play the video
        addConfetti();
    }, 500);
});

function addConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.setProperty('--confetti-color', getRandomColor());
        confetti.style.setProperty('--confetti-delay', `${Math.random() * 2}s`);
        confetti.style.left = `${Math.random() * 100}vw`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

function getRandomColor() {
    const colors = ['#ff4b5c', '#fcff4b', '#4bffa5', '#4b9bff', '#e24bff'];
    return colors[Math.floor(Math.random() * colors.length)];
}
