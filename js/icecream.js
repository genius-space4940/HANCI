const balls = document.querySelectorAll('.icecream-ball');
const images = document.querySelectorAll('.icecream-main');

const imageOrder = ['pistachio', 'orange', 'fruit', 'pink', 'red'];
const ballOrder = ['ball-green', 'ball-orange', 'ball-fruit', 'ball-pink', 'ball-red'];

function updateActiveImage() {
    images.forEach(image => image.classList.remove('active'));
    balls.forEach(ball => ball.classList.remove('active'));

    const currentImageId = imageOrder[activeIndex];
    const currentBallId = ballOrder[activeIndex];

    document.getElementById(currentImageId).classList.add('active');
    document.getElementById(currentBallId).classList.add('active');

    activeIndex = (activeIndex + 1) % imageOrder.length;
}

setInterval(updateActiveImage, 5000);

balls.forEach(ball => {
    ball.addEventListener('click', function () {
        const selectedBallId = this.id;
        const selectedIndex = ballOrder.indexOf(selectedBallId);

        if (selectedIndex !== -1) {
            activeIndex = selectedIndex;
            updateActiveImage();
        }
    });
});