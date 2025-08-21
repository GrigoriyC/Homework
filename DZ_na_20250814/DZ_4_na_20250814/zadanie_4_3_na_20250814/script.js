alert("Задание 3.\n\nСоздать html-страницу с формой для ввода стилизованного текста. После заполнения формы, вывести текст на экран в соответствии с указанными стилями.");

let messagesEl = document.querySelector(".messages-container");
let formEl = document.querySelector("form");
formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    let txt = this.userText.value;
    this.userText.value = "";
    if (!txt.trim()) return;
    let message = document.createElement('div');
    message.classList.add('message');
    let messContainer = document.createElement('p');
    messContainer.classList.add('text');
    messContainer.textContent = txt;
    message.appendChild(messContainer);
    messagesEl.appendChild(message);
    messContainer.classList.add(this.fontStyle.value);
});
