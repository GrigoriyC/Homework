alert("Задание 2.\n\nСоздать html-страниц с деревом вложенных директорий.\nПри клике на элемент списка, он должен сворачиваться или разворачиваться. При наведении на элемент, шрифт должен становиться жирным (с помощью CSS).");

const folders = document.querySelectorAll('.folder');

folders.forEach(folder => {
    folder.addEventListener('click', function() {
        const parentLi = this.parentElement;

        if (!parentLi.classList.contains('open')) {
            parentLi.classList.add('open');
        } else {
            parentLi.classList.remove('open');
        }
    });
});
