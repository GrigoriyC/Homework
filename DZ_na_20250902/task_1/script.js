alert("1) Модифицируйте код перетаскиваемого блока (#block) так, чтобы: \nПри двойном клике (событие dblclick) на блок он возвращался в исходное положение (координаты 0,0).");

const blockElement = document.querySelector("#block");

let isBlockDragget = false;

blockElement.addEventListener("mousedown", () => isBlockDragget = true);
blockElement.addEventListener("mouseup", () => isBlockDragget = false);

document.addEventListener("mousemove", (event) => {
    if (isBlockDragget) {
        blockElement.style.transform = `translate(${event.pageX-75}px, ${event.pageY-75}px)`;
    }
});

// Добавляем обработчик событий, который сработает на двойное нажатие на клавишу мыши и переместит блок в изначальное положение.

blockElement.addEventListener("dblclick", () => {
    blockElement.style.transform = "translate(0px, 0px)";
});
