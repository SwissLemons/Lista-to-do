document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    // Criar o novo item da lista
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Criar o texto da tarefa
    const taskTextElement = document.createElement('span');
    taskTextElement.classList.add('task-text');
    taskTextElement.textContent = taskText;

    // Criar o botão "Concluído"
    const completeButton = document.createElement('button');
    completeButton.textContent = '✓';
    completeButton.classList.add('btn', 'complete');
    completeButton.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    // Criar o botão "Remover"
    const removeButton = document.createElement('button');
    removeButton.textContent = '✗';
    removeButton.classList.add('btn', 'remove');
    removeButton.addEventListener('click', function() {
        taskItem.remove();
    });

    // Adicionar o texto da tarefa e os botões ao item da lista
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(removeButton);

    // Adicionar o novo item à lista
    document.getElementById('taskList').appendChild(taskItem);

    // Limpar o input
    taskInput.value = '';
});