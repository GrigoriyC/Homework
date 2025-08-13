let count = 0;

// Получаем элемент из html с id "counterDisplay" через атрибут ".querySelector".
const counterDisplayElement = document.querySelector("#counterDisplay");

// Получаем элемент из html с id "incCounterBtn" через атрибут ".querySelector",
// навешиваем на него обработчик событий через атрибут ".addEventListener" 
// и пишем функцию.
document.querySelector("#incCounterBtn").addEventListener('click', () => {
    // Если на кнопку "+" выполнено не больше трех нажатий, 
    // переменная "count" увеличивается на 1.
    if (count <= 2) {
        counterDisplayElement.textContent = ++count;
    }
    else {
    // Если на кнопку "+" выполнено три нажатия и выполняется четвертое нажатие или более,
    // то обработчик событий удаляется и при нажатии на эту кнопку больше ничего не происходит.
        removeEventListener();
    }
})

// Получаем элемент из html с id "decCounterBtn" через атрибут ".querySelector",
// навешиваем на него обработчик событий через атрибут ".addEventListener" 
// и пишем функцию.
document.querySelector("#decCounterBtn").addEventListener('click', () => {
    // Если на кнопку "-" выполнено не больше двух нажатий, 
    // переменная "count" уменьшается на 1.
    if (count >= -1) {
        counterDisplayElement.textContent = --count;
    }
    else {
    // Если на кнопку "-" выполнено два нажатия и выполняется третье нажатие или более,
    // то обработчик событий удаляется и при нажатии на эту кнопку больше ничего не происходит.
        removeEventListener();
    }
})

// Нажатие на кнопку «Сбросить» возвращает значение в 0 и снова активирует все кнопки.
document.getElementById("resetCounterBtn").addEventListener('click', () => {
    count = 0;
    counterDisplayElement.textContent = 0;
})