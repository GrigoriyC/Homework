alert("Задание 3\n\nСоздать html-страницу с блоками информации, которые открываются по щелчку на заголовок. В один момент времени может быть развернут только один блок информации.");

let blocks = Array.from(document.getElementsByClassName("block"));

function toggleBlock(index) {
  blocks.forEach(function (block, i) {
    if (i === index) {
      block.classList.add("active");
    } else {
      block.classList.remove("active");
    }
  });
};
