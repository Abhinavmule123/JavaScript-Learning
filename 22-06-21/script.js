let boldBtn = document.getElementById("bold-btn");
let italicBtn = document.getElementById("italic-btn");
let underBtn = document.getElementById("underline-btn");
let superBtn = document.getElementById("super-btn");
let subBtn = document.getElementById("sub-btn");
let deleteBtn = document.getElementById("delete-btn");

boldBtn.onclick = function(){
    document.execCommand("bold");
}

italicBtn.onclick =  function(){
    document.execCommand("italic");
}

underBtn.onclick = function(){
    document.execCommand("underline");
}

superBtn.onclick = function(){
    document.execCommand("superscript");
}

subBtn.onclick = function(){
    document.execCommand("subscript");
}

deleteBtn.onclick = function(){
    document.execCommand("delete");
}

