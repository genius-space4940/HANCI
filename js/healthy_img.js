document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: ".healthy-img",
        keyframes: [
            { translateY: 0 },
            { translateY: 10 },
            { translateY: 20 },
            { translateY: 10 },
            { translateY: 0 },
        ],
        duration: 3000,
        delay: 0,
        easing: 'linear',
        loop: true,
    })
});

anime({
    targets: ".hero-image-circle-text",
    rotate: -360,
    duration: 10000,
    easing: "linear",
    loop: true,
})

anime({
    targets: ".circle-block-text",
    rotate: -360,
    duration: 10000,
    easing: "linear",
    loop: true,
})

anime({
    targets: ".blue-lightning",
    translateY: [0, 10],
    duration: 3000,
    easing: "linear",
    direction: "alternate",
    loop: true,
})

anime({
    targets: ".red-lightning",
    translateY: [0, 12],
    duration: 3000,
    easing: "linear",
    direction: "alternate",
    loop: true,
})

anime({
    targets: ".yellow-lightning",
    translateY: [0, 15],
    duration: 3000,
    easing: "linear",
    direction: "alternate",
    loop: true,
})