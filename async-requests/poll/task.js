const question = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.responseType = 'json';


xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        question.insertAdjacentText('afterbegin', xhr.response.data.title);

        let answers = xhr.response.data.answers;
        let buttons = document.getElementsByClassName("poll__answer");

        for (let answer in answers) {
            pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">
            ${answers[answer]}
          </button>`);
        }

        for (let btn of buttons) {
            btn.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'))
        }
    }
};

xhr.send();
