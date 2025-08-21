alert("Задание 3.\n\nСоздать html-страницу с футбольным полем, которое занимает всю ширину и высоту экрана, и мячом размером 100 на 100 пикселей.\nСделать так, чтобы при клике мышкой по полю, мяч плавно перемещался на место клика. Учтите: необходимо, чтобы центр мяча останавливался именно там, где был совершен клик мышкой. Также предусмотрите, чтобы мяч не выходил за границы поля.")

field.addEventListener("click", function (e) {
  let fieldCoords = field.getBoundingClientRect();

  let ballCoords = {
    top: e.clientY - fieldCoords.top - ball.clientHeight / 2,
    left: e.clientX - fieldCoords.left - ball.clientWidth / 2,
  };

  ball.style.left = ballCoords.left + "px";
  ball.style.top = ballCoords.top + "px";
});
