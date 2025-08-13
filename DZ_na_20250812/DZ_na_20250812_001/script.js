document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    
    // Создаем новую задачу.
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTodo();
    });
    
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText) {
            createTodoItem(todoText);
            todoInput.value = '';
        }
    }
    
    function createTodoItem(text, isEditMode = false) {
        const li = document.createElement('li');
        li.className = 'li-text';
        
        if (isEditMode) {
            // Создаем элементы для редактирования задачи.
            const editInput = document.createElement('input');
            editInput.type = 'text';
            editInput.className = 'edit-input';
            editInput.value = text;
            
            const saveBtn = document.createElement('button');
            saveBtn.className = 'save-btn';
            saveBtn.textContent = 'Save';
            saveBtn.addEventListener('click', function() {
                const newText = editInput.value.trim();
                if (newText) {
                    li.innerHTML = '';
                    createTodoItem(newText, false);
                }
            });
            
            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'delete-btn';
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click', function() {
                li.innerHTML = '';
                createTodoItem(text, false);
            });
            
            li.appendChild(editInput);
            li.appendChild(saveBtn);
            li.appendChild(cancelBtn);
        } else {

            const span = document.createElement('span');
            span.textContent = text;
            
            const editBtn = document.createElement('button');
            editBtn.className = 'edit-btn';
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', function() {
                li.innerHTML = '';
                createTodoItem(text, true);
            });
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            // Навешиваем обработчик на контейнер "ol", который мы получаем по переменной "todoList".
            // Создаем событие на клик по клавише "Delete".
            todoList.addEventListener('click', (event) => {
                // Эту команду используем для того, чтобы проверить, на каком объекте сработало событие.
                // console.log(event.target);
                
                // "event.target" - эта часть сохраняет то, на какую кнопку "Delete" был выполнен клик мышью.
                // Создаем переменную, в которую сохраняем данные родительского элемента,
                // для этого используем атрибут "parentNode".
                let parentEl = event.target.parentNode;
                // Используя переменную "parent" удаляем всю строку.
                parentEl.remove();
            }
            );

            li.appendChild(span);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
        }
        
        todoList.appendChild(li);
    }
});