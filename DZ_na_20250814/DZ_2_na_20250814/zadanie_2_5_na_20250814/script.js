alert("Задание 5.\n\nСоздать html-страницу с большой таблицей.\nПри клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Например: на скриншоте люди отсортированы по возрасту. Учтите, что числовые значения должны сортироваться как числа, а не как строки.");

table.onclick = function (e) {
  if (e.target.tagName != "TH") return;
  let thRow = e.target;
  sortTable(thRow.cellIndex, thRow.dataset.type);
};

function sortTable(colNum, type) {
  let tbody = table.querySelector("tbody");
  let rowsArray = Array.from(tbody.rows);
  let compare;
  switch (type) {
    case "number":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
      };
      break;
    case "string_table":
      compare = function (rowA, rowB) {
        return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML
          ? 1
          : -1;
      };
      break;
  }
  rowsArray.sort(compare);
  tbody.append(...rowsArray);
};
