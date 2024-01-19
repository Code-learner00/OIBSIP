function saveTask() {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-description').value;

    if (title.trim() === '' || description.trim() === '') {
        alert('Please enter a title and description for the task.');
        return;
    }

    const taskItem = createTaskItem(title, description);
    document.getElementById('task-items').appendChild(taskItem);

    document.getElementById('task-title').value = '';
    document.getElementById('task-description').value = '';
}

function createTaskItem(title, description) {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const titleSpan = document.createElement('span');
    titleSpan.textContent = title;

    const descriptionSpan = document.createElement('span');
    descriptionSpan.textContent = description;

    const deleteSpan = document.createElement('span');
    deleteSpan.innerHTML = '&#10060;';
    deleteSpan.classList.add('delete-btn');
    deleteSpan.addEventListener('click', function () {
        taskItem.remove();
    });

    taskItem.appendChild(titleSpan);
    taskItem.appendChild(descriptionSpan);
    taskItem.appendChild(deleteSpan);

    return taskItem;
}
