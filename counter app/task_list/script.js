const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('add a task');
    }
    const li = document.createElement('li');
    li.className = 'collection-item';

    // create a tex note and append to li
    li.appendChild(document.createTextNode (taskInput.value));

    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="fa fa-remove"></i>';

    li.appendChild(link);
    taskList.appendChild(li);
    
    console.log(li);
    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e) {
    console.log(e.target);
    if(e.target.parentElement.classList.contains('delete-item')) {
        console.log(e.target)
        if(confirm('Are you Sure lol?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
        
}

function clearTasks() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTask (e) {
    const text = e.target.value.toLowercase();
    //console.log(text);
     document.querySelectorAll('. collection-item')
     forEach(function(task)  {
        const item = task.firstChild.textContent;
        if(item.toLowercase().indexOf(text) != -1) {
            task.style.display = 'block'; 
        } else {
            task.style.display = 'none';
        }
     });
    //console.log(allItems)

}
