let tasks = [];

function addTask(){
    let input = document.getElementById("taskInput");
    let taskText = input.value;

    if (taskText === ""){
        alert("Please enter a task!");
        return;
    }

    tasks.push(taskText);

    input.value = "";

    showTasks();
}


function showTasks(){

    let taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    if(tasks.length === 0){
        taskList.innerHTML = '<div class ="empty-state"><div class ="empty-icon">📝</div><p>No tasks yet. Add one above!</p></div>';
        updateStats();
        return;
    }


    for(let i = 0; i < tasks.length; i++){

        let li = document.createElement("li");
        li.className = "task-item";

        let span = document.createElement("span");
        span.className = "task-text";
        span.textContent = tasks[i];
        span.onclick = function(){

            this.classList.toggle("completed");
            this.parentElement.classList.toggle("completed");
            updateStats();
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function(){

            let taskText = this.previousSibling.textContent;
            let index = tasks.indexOf(taskText);
            tasks.splice(index, 1);
            showTasks();
        };

        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    }

    updateStats();
}


function updateStats(){
    document.getElementById("totalTasks").textContent = tasks.length;

    let completedCount = 0;
    let allTasks = document.querySelectorAll(".task-text");

    for(let i = 0;  i < allTasks.length; i++){
        if(allTasks[i].classList.contains("completed")){
            completedCount++;
        }
    }

document.getElementById("completedTasks").textContent = completedCount;
}