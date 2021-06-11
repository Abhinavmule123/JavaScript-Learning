const addTodoBtn = document.getElementById("add-todo");
let bgId = document.getElementById("background");
let modalId = document.getElementById("modal");
const formId = document.getElementById("add-form");
const todoOlId = document.getElementById("todo-ol");
const manageTContId = document.getElementById("manage-container");
const manageTBtn = document.getElementById("manage-btn");
const completeOl = document.getElementById("completed-ol");
const todoTable = document.getElementById("todo-table");
const manageShow = ()=>{
    bgId.style.display = "block";
    manageTContId.style.left = "50%";
    bgId.onclick = manageHide;
}
const manageHide = ()=>{
    bgId.style.display = "none";
    manageTContId.style.left = "-30%";
}

manageTBtn.onclick = manageShow;


const removeModal = ()=>{
    modalId.className = "animate__animated animate__fadeOutDown";
    modalId.style.display = "none";
    bgId.style.display = "none";
}

addTodoBtn.onclick = function(){
    bgId.style.display = "block";
    modalId.style.display = "block";
    modalId.className = "animate__animated animate__fadeInDown";
    bgId.onclick = removeModal;
    formId.onsubmit = function(e){
        e.preventDefault();
        let todo=document.getElementById("todo");
        if(todo.value != ""){
            addTodo(todo.value);
        }else{
            alert("Todo can not be empty !");
        }
    };
}


function addTodo(todoName){
    let li = document.createElement("LI");
    let markButton = document.createElement("BUTTON");
    markButton.textContent = "Mark";
    markButton.className = "mark-btn";
    let p = document.createElement("P");
    p.textContent = todoName;
    li.append(p);
    li.append(markButton);
    todoOlId.append(li);  
    formId.reset(); 
}











