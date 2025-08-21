alert("Задание 2.\n\nСоздать html-страницу с галереей.\nВ один момент времени на экране отображается одно изображение и две кнопки: Назад и Вперед. При нажатии на кнопки изображения должны переключаться в указанном порядке. Когда следующего/предыдущего изображения нет, то соответствующую кнопку необходимо блокировать. Изображения хранить в заранее подготовленном массиве.");

let images = ["html.png", "css.png", "js.png"];

let imageElement = document.getElementById("image");
let previousButtonEl = document.getElementById("previousButton");
let nextButtonEl = document.getElementById("nextButton");
let currentIndex = 0;

function updateGallery() {
  imageElement.src = images[currentIndex];

  if (currentIndex === 0) {
    previousButtonEl.disabled = true;
  } else {
    previousButtonEl.disabled = false;
  }

  if (currentIndex === images.length - 1) {
    nextButtonEl.disabled = true;
  } else {
    nextButtonEl.disabled = false;
  }
}

previousButtonEl.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
});

nextButtonEl.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateGallery();
  }
});

updateGallery();
