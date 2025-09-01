alert('2) Секретное сообщение\n\nСоздайте обработчик событий клавиатуры, который выводит в #output сообщение "Секретное сообщение открыто!" только если пользователь нажал комбинацию клавиш Ctrl + Alt + S.')

document.addEventListener('DOMContentLoaded', () => {
const output = document.getElementById('output');

document.addEventListener('keydown', (event) => {
    // Проверяем, нажата ли комбинация клавиш "Ctrl+Alt+S".
    if ((event.ctrlKey || event.metaKey) && event.altKey && event.key.toLowerCase() === 's') {
        // Запрещаем поведение браузера по умолчанию
        event.preventDefault();
        
        // Выводим в окно браузера секретное сообщение.
        output.textContent = "Секретное сообщение открыто!";
        output.classList.add('secret-revealed');
    }
});
});
