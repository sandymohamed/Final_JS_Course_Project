let tasks = localStorage.getItem('tasks') || [];
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value.trim();

    if (taskDescription !== "") {
        const task = {
            id: Date.now(),
            description: taskDescription,
            completed: false
        };

        tasks.push(task);
        taskInput.value = '';
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

function removeTask(id) {
    // tasks = tasks.filter(task => task.id !== id);


    for (let task = 0; task < tasks.length; task++) {
        if (tasks[task].id === id) {
            tasks.splice(task, 1)
            console.log(tasks);
            displayTasks();
        }
    }


    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function toggleTaskCompletion(id) {
    // const task = tasks.find(task => task.id === id);
    // task.completed = !task.completed;

    for (let task = 0; task < tasks.length; task++) {
        if (tasks[task].id === id) {
            tasks[task].completed = !tasks[task].completed;
            console.log(tasks);
            displayTasks();
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    if (tasks != null && tasks.length > 0) {
        console.log(tasks);
        for (task of tasks) {
            console.log(task);
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';
            li.innerHTML = `
            ${task.description}
            <div>
                <button onclick="toggleTaskCompletion(${task.id})" class="btn complete-btn">${!task.completed ? 'completed' : 'unCompleted'}</button>
                <button onclick="removeTask(${task.id})" class="btn remove-btn">Remove</button>
            </div>
        `;
            taskList.appendChild(li);
        }

    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

displayTasks();
