var loginDirection=document.getElementsByClassName("loginDirect")[0];

loginDirection.addEventListener("click", function(e) {
    window.open("../views/login.html"); 
}, false);

var SignUpDirection=document.getElementsByClassName("signUpDirect")[0];

SignUpDirection.addEventListener("click", function(e) {
    window.open("../views/signup.html"); 
}, false);