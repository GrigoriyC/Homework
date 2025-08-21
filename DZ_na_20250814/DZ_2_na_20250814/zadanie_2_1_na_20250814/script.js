alert("Задание 1.\n\nСоздать html-страницу со списком ссылок.\nСсылки на внешние источники (которые начинаются с http://) необходимо подчеркнуть пунктиром.\nИскать такие ссылки в списке и устанавливать им дополнительные стили необходимо с помощью JS.");

let listLink = document.getElementById("list");
let links = listLink.getElementsByTagName("a");

for (let i = 0; i < links.length; i++) {
  let link = links[i];
  if (link.href.startsWith("https://")) {
    link.classList.add("external-link");
  }
};
