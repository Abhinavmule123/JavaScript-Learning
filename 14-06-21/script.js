const showId = document.getElementById("show-signup");
const signCont = document.getElementById("signup-box");
const closeId = document.getElementById("close");
showId.onclick = function(){ 
    signCont.style.display = "block";
    signCont.style.animation = "slide 0.7s";
    signCont.style.animationFillMode = "forwards";
}
closeId.onclick = function(){
    signCont.style.display = "none";
}

