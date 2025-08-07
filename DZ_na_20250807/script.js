document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    
    // Добавляем новую задачу в список
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
        
        if (isEditMode) {
            // Создаём элементы для редактирования текста задачи
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
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });
            
            li.appendChild(span);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);
        }
        
        todoList.appendChild(li);
    }
});