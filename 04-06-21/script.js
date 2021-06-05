// let btn = document.getElementById("btn");

// btn.onclick = function run() {
//     alert("button clicked");
// }
// btn.onclick = function () {
//     alert("button 2nd function");
// }

// DOM level 2 
// const clickFunction = ()=>{
//     alert("button cliked");
// }
// const clickFunction1 = ()=>{
//     alert("2nd function button cliked");
// }
// true -  capture phase -  top to bottom approach 
// false - bubble phase  -  bottom to top 

//  btn.addEventListener("click",clickFunction);
//  btn.addEventListener("click",clickFunction1);
// mouseup  --  mousedown , click , mouseup 


// let input  = document.getElementById("input-field");
// input.onblur = function () {
//     alert("on blur event called ");
// };

//  let selectId = document.getElementById("gender");
// selectId.onchange = function () {
//     alert("changed");
// };
// selectId.addEventListener("change",function (){
//     alert("changed");
// });

// window.onload = function(){
//     console.log("loading");
// }

// let formId = document.getElementById("form");
// formId.onsubmit = function(e){
    // e.preventDefault();
    // return false;
// }
// document.body.onscroll = function(){
//     alert("scrolled");
// }

document.oncontextmenu = function(){
    return false;
}
document.onkeyup = function(event){
    if(event.keyCode == 67 && event.ctrlKey){
        alert("copy not allowed ");
        return false;
    }
}

document.addEventListener("copy", function(evt){
    // Change the copied text if you want
    evt.clipboardData.setData("text/plain", "Copying is not allowed on this webpage");
    // Prevent the default copy action
    evt.preventDefault();
  }, false);