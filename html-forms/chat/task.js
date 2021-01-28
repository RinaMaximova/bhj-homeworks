const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');

const botAnswers = [
    'До свидания!',
    'Не пиши сюда, дядя!',
    'Не шуми, мы чиллим'
];

const botMessage = () => {
    let HH = new Date().getHours();
    let mm = new Date().getMinutes();
    let random = Math.floor(Math.random() * (botAnswers.length));

    return messages.innerHTML += `
                          <div class="message">
                            <div class="message__time">${HH}:${mm}</div>
                            <div class="message__text">
                              ${botAnswers[random]}
                            </div>
                          </div>
                        `;
};

const sendMessage = (e) => {
    let HH = new Date().getHours();
    let mm = new Date().getMinutes();
    messages.innerHTML += `
                          <div class="message message_client">
                            <div class="message__time">${HH}:${mm}</div>
                            <div class="message__text">
                              ${e.target.value}
                            </div>
                          </div>
                        `;

    e.target.value = '';

    botMessage();
};


input.addEventListener('change', sendMessage);
chat.addEventListener('click', () => {
    chat.classList.add('chat-widget_active')
});

