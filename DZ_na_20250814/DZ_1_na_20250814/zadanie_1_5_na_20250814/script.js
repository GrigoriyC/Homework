alert("Задание 5.\n\nСоздать html-страницу со списком книг.\nПри щелчке на книгу, цвет фона должен меняться на оранжевый. Учтите, что при повторном щелчке на другую книгу, предыдущей – необходимо возвращать прежний цвет.")

listBook.addEventListener("click", function (e) {
  let target = e.target;
  higlight(target);
});

let selectLi;

function higlight(li) {
  if (selectLi) {
    selectLi.classList.remove("active");
  }
  selectLi = li;
  selectLi.classList.add("active");
};
