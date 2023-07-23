let username = prompt("Enter your name:")
let myTitle = document.getElementById("title")
let count = 0

// Проверяем ввел ли пользователь свое имя
if(username) {
    myTitle.innerHTML = "To Do List for " + username
} else {
    myTitle.innerHTML = "Anonymous user's To Do List"
}

// Добавление проверки для пустого поля ввода + добавляем новую задачу
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        
        `;
        // Удаляем задачи из списка
        let current_tasks = document.querySelectorAll(".delete");

        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        // Вычеркивание выполненной задачи
        let tasks = document.querySelectorAll(".task");
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed')
            }
        }
        // Чистим поле ввода после каждого добавления задачи
        document.querySelector('#newtask input').value = "";
    }  
}


