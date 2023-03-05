const questions = document.querySelectorAll('.questions__item');

function closeAll(excludeQuestion) {
  questions.forEach((questionItem) => {
    const question = questionItem.children[0];

    if (excludeQuestion !== question) {
      const icon = questionItem.children[0].children[0];
      const answer = questionItem.children[1];

      question.classList.remove('text-bold');
      icon.classList.remove('icon-open');
      answer.classList.remove('display-show');
    }
  });
}

questions.forEach((questionItem) => {
  questionItem.children[0].addEventListener('click', (e) => {
    closeAll(e.target);

    const question = e.target;
    const icon = question.children[0];
    const answer = e.target.parentElement.children[1];

    question.classList.toggle('text-bold');
    icon.classList.toggle('icon-open');
    answer.classList.toggle('display-show');
  });
});
