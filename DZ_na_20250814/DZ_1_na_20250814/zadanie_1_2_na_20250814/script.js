alert("Задание 2.\n\nСоздать html-страницу с кнопкой Открыть и модальным окном. На модальном окне должен быть текст и кнопка Закрыть.\nИзначально модальное окно не отображается. При клике на кнопку Открыть появляется модальное окно, на кнопку Закрыть – исчезает.")

openWindow.addEventListener("click", function () {
  modal.style.display = "block";
});

closeWindow.addEventListener("click", function () {
  modal.style.display = "none";
});
