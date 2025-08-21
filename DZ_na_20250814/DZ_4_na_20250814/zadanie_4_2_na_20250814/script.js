alert("Задание 2.\n\nСоздать html-страницу для прохождения теста. Вопросы теста имеют два варианта ответа (только 1 правильный). После прохождения теста, вывести количество правильных ответов.");

    const questionEl = document.querySelectorAll('div[class$="_question"]'),
          resEl = document.querySelector('#res');
    [...questionEl].forEach(div => {
    const txtEl = div.querySelector('p').textContent,
          corr_len = txtEl.substring(txtEl.indexOf('"') + 1, txtEl.lastIndexOf('"')).length,
          corr = div.querySelector('[value="' + corr_len + '"]');
          corr.classList.add('corrans');
          div.addEventListener('click', function(){
          answers = document.querySelectorAll('div[class$="_question"] input:checked').length;
          ranswers = document.querySelectorAll('[class="corrans"]:checked').length;
          resEl.innerHTML = '<b>' + ranswers + '</b> правильных ответов на ' + answers + ' вопросов';
          resEl.querySelector('b').style.color = answers == ranswers ? 'green' : 'red';
          });
    });
