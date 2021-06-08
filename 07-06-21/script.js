const addTodoBtn = document.getElementById("add-todo");
let bgId = document.getElementById("background");
let modalId = document.getElementById("modal");
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
}




