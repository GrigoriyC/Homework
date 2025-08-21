alert("Задание 3.\n\nСоздать html-страницу со списком книг.\nПри щелчке на элемент, цвет текста должен меняться на оранжевый. При повторном щелчке на другую книгу, предыдущей необходимо возвращать прежний цвет.\nЕсли при клике мышкой была зажата клавиша Ctrl, то элемент добавляется/удаляется из выделенных. Если при клике мышкой была зажата клавиша Shift, то к выделению добавляются все элементы в промежутке от предыдущего кликнутого до текущего.")

let rows = document.querySelectorAll("tr");
rows.forEach((element) => {
  element.onmousedown = paint;
});

let lastRow;

function paint() {
  if (event.shiftKey) {
    if (lastRow.rowIndex < this.rowIndex) {
      for (let i = lastRow.rowIndex; i <= this.rowIndex; i++) {
        rows[i].classList.add("selected");
      }
    } else {
      for (let i = lastRow.rowIndex; i >= this.rowIndex; i--) {
        rows[i].classList.add("selected");
      }
    }
    return;
  }
  if (event.ctrlKey) {
    if (this.classList.contains("selected")) {
      this.classList.remove("selected");
      return;
    } else {
      this.classList.add("selected");
      return;
    }
  }

  document.querySelectorAll(".selected").forEach((elem) => {
    elem.classList.remove("selected");
  });
  if (!this.classList.contains("selected")) {
    this.classList.add("selected");
  }
  if (this.classList.contains("selected")) {
    lastRow = this;
    return;
  }
};

