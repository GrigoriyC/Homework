alert("Задание 1.\n\nСоздать html-страницу для ввода имени пользователя.\nНеобходимо проверять каждый символ, который вводит пользователь. Если он ввел цифру, то не отображать ее в input.")

validateLetters.addEventListener("input", function (e) {
  let regexLetters = /[A-Za-zА-Яа-яЁё -]/;
  let charsLetters = e.target.value.split("");
  let char = charsLetters.pop();
  if (!regexLetters.test(char)) {
    e.target.value = charsLetters.join("");
  }
});
