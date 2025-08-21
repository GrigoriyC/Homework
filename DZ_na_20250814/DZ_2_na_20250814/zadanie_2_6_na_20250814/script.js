alert("Задание 6.\n\nСоздать html-страницу с блоком текста в рамочке.\nРеализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.")

const resizableBox = document.querySelector('.resizableBox');
const changer = document.querySelector('.changer');

let changing = false;

changer.addEventListener('mousedown', (e) => {
    changing = true;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
        changing = false;
        document.removeEventListener('mousemove', handleMouseMove);
    });
});

function handleMouseMove(e) {
    if (changing) {
        let widthEl = e.clientX - resizableBox.offsetLeft;
        let heightEl = e.clientY - resizableBox.offsetTop;

        if (widthEl < resizableBox.parentNode.offsetWidth - 40) {
            resizableBox.style.widthEl = `${widthEl}px`;
        }

        if (heightEl < resizableBox.parentNode.offsetHeight - 40) {
            resizableBox.style.heightEl = `${heightEl}px`;
        }

        if (widthEl > resizableBox.parentNode.offsetWidth * 0.8) {
            resizableBox.style.widthEl = `${resizableBox.parentNode.offsetWidth * 0.8}px`;
        }

        if (heightEl > resizableBox.parentNode.offsetHeight * 0.8) {
            resizableBox.style.heightEl = `${resizableBox.parentNode.offsetHeight * 0.8}px`;
        }
    }
};
