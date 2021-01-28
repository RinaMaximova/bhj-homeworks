const tasksString = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');

const writeTask = () => {
    let textTask = tasksString.value;
    return `<div class='task'>
    <div class='task__title'>
      ${textTask}
    </div>
    <a href='#' class='task__remove'>&times;</a>
  </div>`
};

tasksString.addEventListener('keydown', (event) => {
    if (event.keyCode === 13 && tasksString.value !== '') {
        event.preventDefault();
        tasksList.innerHTML += writeTask();
        tasksString.value = '';
    }
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    if (tasksString.value !== '') {
        tasksList.innerHTML += writeTask();
        tasksString.value = '';
    }
});

tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('task__remove')) {
        event.preventDefault();
        event.target.closest('.task').remove();
    }
});