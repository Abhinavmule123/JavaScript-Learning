const addTodoBtn = document.getElementById("add-todo");
let bgId = document.getElementById("background");
let modalId = document.getElementById("modal");
const formId = document.getElementById("add-form");
const todoOlId = document.getElementById("todo-ol");
const manageTContId = document.getElementById("manage-container");
const manageTBtn = document.getElementById("manage-btn");
const completeOl = document.getElementById("completed-ol");
const todoTable = document.getElementById("todo-table");
let strNo=1;

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
    markButton.id="markButton";
    let p = document.createElement("P");
    p.textContent = todoName;
    li.append(p);
    li.append(markButton);
    todoOlId.append(li); 
    formId.reset(); 
    
    addTodoManageTable(todoName);
    markToCompletTodo(markButton);

}
    function addTodoManageTable(todoName)
    {
        let tr=document.createElement("TR");

        let sr_notd=document.createElement("TD");
        let todosTd=document.createElement("TD");
        let editTd=document.createElement("Td");
        let deleTd=document.createElement("TD");

        sr_notd.textContent=strNo;
        strNo++;
        todosTd.textContent = todoName;

        let edit_btn=document.createElement("BUTTON");
        edit_btn.textContent="Edit";
        edit_btn.className="edit-btn";

        let del_btn=document.createElement("BUTTON");
        del_btn.textContent="Delete";
        del_btn.className="del-btn";

        editTd.append(edit_btn);
        deleTd.append(del_btn);

        tr.append(sr_notd);
        tr.append(todosTd);
        tr.append(editTd);
        tr.append(deleTd);

        todoTable.append(tr);

        editBtnFunction(edit_btn);
        delBtnFunction(del_btn);
    }

function editBtnFunction(edit_btn)
{
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
        }
        else
        {
            let tr =edit_btn.parentElement.parentElement;
            let todo_td=tr.childNodes[1];
            todo_td.setAttribute("contenteditable","false");
            todo_td.style.border="1 px solid black"
            let newtodo=todo_td.textContent;
            edit_btn.textContent="Edit";
            edit_btn.className="edit-btn";

            let todoList=document.querySelectorAll("#todo-ol li");
            for(i=0;i<todoList.length;i++)
            {
                if(todoList[i].childNodes[0].textContent.indexOf(oldtodoName)!=-1)
                {
                    todoList[i].childNodes[0].textContent=newtodo;
                    break;
                }
            }

            let completeTodoList=document.querySelectorAll("#todo-complet-list li");
            for(i=0;i<completeTodoList.length;i++)
            {
                if(completeTodoList[i].childNodes[0].textContent.indexOf(oldtodoName)){
                    completeTodoList[i].childNodes[0].textContent=newtodo;
                }
            }
        }


    }
    


}

function delBtnFunction(del_btn){
        let todoName;
    del_btn.onclick =function ()
    {
        let tr=del_btn.parentElement.parentElement;
        let todo_td=tr.childNodes[1];
        todoName=todo_td.textContent;
        tr.remove();

        let todoList=document.querySelectorAll("#todo-ol li");
        for(i=0;i<todoList.length;i++)
        {
            if(todoList[i].childNodes[0].textContent.indexOf(todoName) !=-1){
                todoList[i].remove();
                break;
            }
        }
        
        let completeTodoList =document.querySelectorAll("#todo-completed-list li")
        for(i=0;i<completeTodoList.length;i++)
        {
            if(completeTodoList[i].childNodes[0].textContent.indexOf(todoName)){
                completeTodoList[i].remove();
                break;
            }
        }

    }

}
let cotodoName;
function markToCompletTodo(markButton)
{
    let todoName;

    markButton.onclick =function()
    {

        if(markButton.className == "mark-btn")
        {

            let mark_to=markButton.parentElement;
            let test=mark_to.childNodes[0];
            todoName=test.textContent;
            
            markButton.onclick =function ()
            {
                mark_to.remove();

                let li = document.createElement("LI");
                let unmarkButton = document.createElement("BUTTON");
                unmarkButton.textContent = "UnMark";
                unmarkButton.className = "complet-mark-btn";
                let p = document.createElement("P");
                p.textContent = todoName;
                console.log(todoName);
                li.append(p);
                li.append(unmarkButton);
                completeOl.append(li); 
               
                markButton.onclick=unMarkTotodo(unmarkButton);
            }
        }
    }
 }
 function unMarkTotodo(unmarkButton){
    unmarkButton.onclick=function()
 {
     if(unmarkButton.className == "complet-mark-btn") {
         
     
         let comark_to=unmarkButton.parentElement;
         let test=comark_to.childNodes[0];
         cotodoName=test.textContent;

         unmarkButton.onclick =function ()
         {
             comark_to.remove();

             let li = document.createElement("LI");
             let markButton = document.createElement("BUTTON");
             markButton.textContent = "Mark";
             markButton.className = "mark-btn";
             let p = document.createElement("P");
             p.textContent = cotodoName;
             li.append(p);
             li.append(markButton);
             todoOlId.append(li); 
            
             markToCompletTodo(markButton);
         }
     }
 }

 }

 