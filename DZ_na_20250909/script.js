document.addEventListener('DOMContentLoaded', function () {
    // DOM Элементы 
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const tasksContainer = document.getElementById('tasks-container');
    const totalTasksSpan = document.getElementById('total-tasks');
    const completedTasksSpan = document.getElementById('completed-tasks');

    // Загрузка задачи из локального хранилища
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        tasksContainer.innerHTML = '';

        if (tasks.length === 0) {
            tasksContainer.innerHTML = `
                        <div class="empty-state">
                            <h3>Пока нет заданий</h3>
                            <p>Добавьте задачу, чтобы начать работу!</p>
                        </div>
                    `;
            updateStats();
            return;
        }

        tasks.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskElement.innerHTML = `
                        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                        <span class="task-text">${task.text}</span>
                        <button class="delete-btn">×</button>
                    `;
            tasksContainer.appendChild(taskElement);

            const checkbox = taskElement.querySelector('.task-checkbox');
            const deleteBtn = taskElement.querySelector('.delete-btn');

            checkbox.addEventListener('change', () => toggleTaskCompleted(index));
            deleteBtn.addEventListener('click', () => deleteTask(index));
        });

        updateStats();
    }

    function addTask() {
        const text = taskInput.value.trim();
        if (text) {
            tasks.push({ text, completed: false });
            taskInput.value = '';
            saveTasks();
            renderTasks();
        }
    }

    function toggleTaskCompleted(index) {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    }

    // Удаление задачи
    function deleteTask(index) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }

    // Обновление статистики задач
    function updateStats() {
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;

        totalTasksSpan.textContent = `Total: ${totalTasks} task${totalTasks !== 1 ? 's' : ''}`;
        completedTasksSpan.textContent = `Completed: ${completedTasks} task${completedTasks !== 1 ? 's' : ''}`;
    }

    // Сохранение задачи в локальном хранилище
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    renderTasks();
});
