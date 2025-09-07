// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Слайдер.

const slider = document.querySelector(".slider"),
btns = document.querySelectorAll(".btn");
let step = 0;

btns[0].addEventListener("click", () => {
    step -= 500;
    if (step < 0) {
        step = 1500;
    }
    slider.style.left = -step + 'px'
});

btns[1].addEventListener("click", () => {
    step += 500;
    if (step > 1500) {
        step = 0;
    }
    slider.style.left = -step + 'px'
});

