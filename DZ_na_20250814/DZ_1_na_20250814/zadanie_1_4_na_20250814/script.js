alert("Задание 4.\n\nСоздать html-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.")

let i = -1;

btnLight.addEventListener("click", function () {
  i++;
  let lights = ["red", "#ffc935ff", "green"];
  let light = document.querySelectorAll(".light");
  if (light[i - 1]) light[i - 1].style.backgroundColor = "";
  if (i == lights.length) i = 0;
  light[i].style.backgroundColor = lights[i];
});
