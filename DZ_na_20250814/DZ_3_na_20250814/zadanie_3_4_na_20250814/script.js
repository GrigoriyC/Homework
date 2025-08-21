alert("Задание 4.\n\nСоздать html-страницу с новостями.\nНеобходимо отлавливать, когда скролл доходит до конца страницы, и догружать еще новости в список. Новости для подгрузки хранить в заранее подготовленном массиве.\nОблегченный вариант: вместо отлова, когда скролл дойдет до конца страницы, используйте кнопку в конце списка новостей.");

let newsContainer = document.getElementById("newsContainer");
let loaderEl = document.getElementById("loader");
let oneIndex = 0;

function loadMoreNews() {
  loaderEl.style.display = "block";

  setTimeout(function () {
    for (let i = 0; i < 1; i++) {
      if (oneIndex < news.length) {
        let newElement = document.createElement("div");
        newElement.className = "news";
        newElement.textContent = news[oneIndex];
        newsContainer.appendChild(newElement);
        oneIndex++;
      }
    }
    loaderEl.style.display = "none";
  }, 3000);
  let news = [
    `When you look at a design or template before the real content is available, it often has blocks of Lorem Ipsum in place of actual writing. This helps focus attention on the visual elements, such as the layout, font choices, and spacing, without getting distracted by the actual words. Since Lorem Ipsum doesn’t make sense to the reader, it ensures that the design is judged by its appearance, not by the content of the text.`,
  ];
}

window.addEventListener("scroll", function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMoreNews();
  }
});

loadMoreNews();
