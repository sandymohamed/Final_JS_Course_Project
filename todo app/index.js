
let tasks = [];

function dispaly() {
    const list = document.getElementById('taskList');
    list.innerHTML = '';
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
            list.appendChild(li);
        }

    }
}


function removeTask(id) {
    // tasks = tasks.filter(task => task.id === id);
    // dispaly();
    for (let task = 0; task < tasks.length; task++) {
        if (tasks[task].id === id) {
            tasks.splice(task, 1)
            console.log(tasks);
            dispaly()
        }
    }
}


function toggleTaskCompletion(id) {
    for (let task = 0; task < tasks.length; task++) {
        if (tasks[task].id === id) {
            tasks[task].completed = !tasks[task].completed;
            console.log(tasks);
            dispaly()
        }
    }
}


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("add task")
    } else {
        const task = {
            id: Date.now(),
            description: taskValue,
            completed: false
        }
        tasks.push(task);

        taskInput.value = "";

    }
    dispaly()
}