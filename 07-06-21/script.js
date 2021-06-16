const addTodoBtn = document.getElementById("add-todo");
let bgId = document.getElementById("background");
let modalId = document.getElementById("modal");
const formId = document.getElementById("add-form");
const todoOlId = document.getElementById("todo-ol");
const manageTContId = document.getElementById("manage-container");
const manageTBtn = document.getElementById("manage-btn");
const completeOl = document.getElementById("completed-ol");
const todoTable = document.getElementById("todo-table");
let srCount = 1;
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
    addTodoManageTable(todoName);
}

function addTodoManageTable(todoName){
    let tr = document.createElement("TR");
    
    let sr_td = document.createElement("TD");
    let todo_td = document.createElement("TD");
    let edit_td = document.createElement("TD");
    let del_td = document.createElement("TD");

    sr_td.textContent = srCount;
    srCount++;
    todo_td.textContent = todoName;

    let edit_btn = document.createElement("BUTTON");
    edit_btn.textContent = "Edit";
    edit_btn.className = "edit-btn";

    let del_btn = document.createElement("BUTTON");
    del_btn.textContent = "Delete";
    del_btn.className = "del-btn";

    edit_td.append(edit_btn);
    del_td.append(del_btn);

    tr.append(sr_td);
    tr.append(todo_td);
    tr.append(edit_td);
    tr.append(del_td);

    todoTable.append(tr);

    editBtnFunction(edit_btn);
    delBtnFunction(del_btn);
}

function editBtnFunction(edit_btn){
    let oldtodoName;
   edit_btn.onclick = function(){
       if(edit_btn.className == "edit-btn"){
        let tr = edit_btn.parentElement.parentElement;
        let todo_td = tr.childNodes[1];
        oldtodoName = todo_td.textContent;
         todo_td.setAttribute("contenteditable","true");
         todo_td.style.border = "2px dashed blue";
         edit_btn.textContent = "Update";
         edit_btn.className = "update-btn";
       }else{
        let tr = edit_btn.parentElement.parentElement;
        let todo_td = tr.childNodes[1];
        todo_td.setAttribute("contenteditable","false");
        todo_td.style.border = "1px solid black";
        let newtodo = todo_td.textContent;
        edit_btn.textContent = "Edit";
        edit_btn.className = "edit-btn";
        
        let todoList = document.querySelectorAll("#todo-list li");
        for(let i=0;i<todoList.length;i++){
            if(todoList[i].children[0].textContent.indexOf(oldtodoName) != -1){
                todoList[i].children[0].textContent = newtodo;
                break;
            }
        }

        let CompleteTodoList = document.querySelectorAll("#todo-completed-list li");
        for(let i=0;i<CompleteTodoList.length;i++){
            if(CompleteTodoList[i].children[0].textContent.indexOf(oldtodoName) != -1){
                CompleteTodoList[i].children[0].textContent = newtodo;
                break;
            }
        }
       }
   }
}

function delBtnFunction(del_btn){
    let todoName;
    del_btn.onclick = function(){
        let tr = del_btn.parentElement.parentElement;
        let todo_td = tr.childNodes[1];
        todoName = todo_td.textContent;
        tr.remove();

        let todoList = document.querySelectorAll("#todo-list li");
        for(let i=0;i<todoList.length;i++){
            if(todoList[i].children[0].textContent.indexOf(todoName) != -1){
                todoList[i].remove();
                break;
            }
        }

        let CompleteTodoList = document.querySelectorAll("#todo-completed-list li");
        for(let i=0;i<CompleteTodoList.length;i++){
            if(CompleteTodoList[i].children[0].textContent.indexOf(todoName) != -1){
                CompleteTodoList[i].remove();
                break;
            }
        }
       
    }
}








