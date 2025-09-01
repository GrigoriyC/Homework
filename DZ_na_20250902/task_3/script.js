alert("3) Добавьте движение красному квадрату (.box) по диагонали. При нажатии комбинации клавиш (например, Shift + ArrowRight) квадрат должен двигаться вправо и вниз одновременно.");

const fieldElement = document.querySelector(".field"),
box = document.querySelector(".box");

let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
    console.log(event.key);
    if (event.key === "ArrowRight") {
        if (x < 550){
        x += 10;
        box.style.left = `${x}px`;
    }
    }

    if (event.key === "ArrowLeft") {
        if (x > 0){
        x -= 10;
        box.style.left = `${x}px`;
    }
    }

    if (event.key === "ArrowDown") {
        if (y < 550){
        y += 10;
        box.style.top = `${y}px`;
    }
    }

    if (event.key === "ArrowUp") {
        if (y > 0){
        y -= 10;
        box.style.top = `${y}px`;
    }
    }

    // Shift

    if (event.key === "Shift") {
        if (x < 550 && y < 550) {
        x += 10;
        y += 10;
        box.style.left = `${x}px`;
        box.style.top = `${y}px`;
    }
    }

})