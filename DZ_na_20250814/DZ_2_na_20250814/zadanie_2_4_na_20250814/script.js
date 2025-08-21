alert("Задание 4.\n\nСоздать html-страницу для отображения/редактирования текста.\nПри открытии страницы текст отображается с помощью тега div. При нажатии Ctrl+E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl+S, вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.")

area.hidden = true;

document.onkeydown = function (e) {
  if (e.ctrlKey && e.keyCode == "69") {
    view.hidden = true;
    area.hidden = false;
    area.focus();
    area.innerHTML = view.innerHTML;
    return false;
  }

  if (e.ctrlKey && e.keyCode == "83") {
    view.hidden = false;
    area.hidden = true;
    view.innerHTML = area.value;
    return false;
  } else if (e.keyCode == "27") {
    view.hidden = false;
    area.hidden = true;
  }
};

