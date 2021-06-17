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

const signupForm = document.getElementById("signup-form");

signupForm.onsubmit = function(e){
    e.preventDefault();
    const name = document.getElementById("signup-name");
    const mobile = document.getElementById("signup-mobile");
    const email = document.getElementById("signup-email");
    const password = document.getElementById("signup-password");
    const mobileError = document.getElementById("mobile-error");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const error = document.getElementById("error");
    if(name.value == "" || mobile.value == "" || email.value == "" || password.value == ""){
        error.innerHTML = "All fields are required"; 
        error.className = "animate__animated animate__bounceIn"; 
        setTimeout(function(){
            error.innerHTML = "";
        },2000);
        return false;
    }   
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(!regexEmail.test(String(email.value).toLowerCase())){
         emailError.innerHTML = "Please Enter Valid Email ID"; 
        emailError.className = "animate__animated animate__bounceIn";
        setTimeout(function(){
            emailError.innerHTML = "";
        },2000); 
         return false;
     }else if(mobile.value.length != 10){
        mobileError.innerHTML = "Please Enter the valid mobile no"; 
        mobileError.className = "animate__animated animate__bounceIn";
        setTimeout(function(){
            mobileError.innerHTML = "";
        },2000); 
         return false;
     }else if(password.value.length < 8){
        passwordError.innerHTML = "Password length should be greater than 8 character"; 
        passwordError.className = "animate__animated animate__bounceIn";
        setTimeout(function(){
            passwordError.innerHTML = "";
        },2000); 
        return false;
     }else{
        storeUserData(name.value,mobile.value,email.value,password.value);
     }
}

function storeUserData(name,mobile,email,password){
      let user_object  = {name:name,mobile:mobile,email:email,password:password};
      let json_object = JSON.stringify(user_object);
    localStorage.setItem("user_data",json_object);
    alert("You are successfully Registered");
}


const loginForm = document.getElementById("login-form");
loginForm.onsubmit = function(e){
    e.preventDefault();
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");
    const emailError = document.getElementById("lemail-error");
    const passwordError = document.getElementById("lpassword-error");
    const error = document.getElementById("lerror");
    if(email.value == "" || password.value == ""){
        error.innerHTML = "All fields are required"; 
        error.className = "animate__animated animate__bounceIn"; 
        setTimeout(function(){
            error.innerHTML = "";
        },2000);
        return false;
    }   
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(!regexEmail.test(String(email.value).toLowerCase())){
         emailError.innerHTML = "Please Enter Valid Email ID"; 
        emailError.className = "animate__animated animate__bounceIn";
        setTimeout(function(){
            emailError.innerHTML = "";
        },2000); 
         return false;
     }else if(password.value.length < 8){
        passwordError.innerHTML = "Password length should be greater than 8 character"; 
        passwordError.className = "animate__animated animate__bounceIn";
        setTimeout(function(){
            passwordError.innerHTML = "";
        },2000); 
        return false;
     }else{
        loginUser(email.value,password.value);
     }
}

function loginUser(email,password){
    let json_data = localStorage.getItem("user_data");
    let user_data = JSON.parse(json_data);
    if(user_data.email == email && user_data.password == password){
        sessionStorage.setItem("user-email",email);
        window.location.assign("home.html");
    }
    else{
        alert("username or password invalid");
    }
}