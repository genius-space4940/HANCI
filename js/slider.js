document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.popular-slider');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    const slideWidth = 373 + 40;
    const visibleSlides = 3;
    const totalSlides = slider.children.length;

    let currentPosition = 0;
    
    function updateSliderPosition () {
        slider.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPosition > 0) {
            currentPosition--;
            updateSliderPosition();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPosition < totalSlides - visibleSlides) {
            currentPosition++;
            updateSliderPosition();
        }
    })

});