document.getElementById("btn__login-sesion").addEventListener("click", login);
document.getElementById("btn__login-register").addEventListener("click", register);
window.addEventListener("resize", widthPage);

//Declaration of variables
var cointainer_login_register = document.querySelector (".cointainer__login-register")
var form_login = document.querySelector (".form__login")
var form_register = document.querySelector (".form__register")
var background_box_register = document.querySelector (".background__box-register")
var background_box_login = document.querySelector (".background__box-login")


function widthPage(){
    if(window.innerWidth > 850){
        background_box_login.style.display = "block";
        background_box_register.style.display = "block";
    }else{
    background_box_register.style.display = "block";
    background_box_register.style.opacity = "1";
    background_box_login.style.display = "none";
    form_login.style.display = "block"
    cointainer_login_register.style.left = "0px"
    }
}

widthPage();

function login(){
    if(window.innerWidth > 850){
        form_register.style.display = "none";
        cointainer_login_register.style.left = "10px";
        form_login.style.display = "block";
        background_box_register.style.opacity = "1";
        background_box_login.style.opacity = "0"
    }else{
        form_register.style.display = "none";
        cointainer_login_register.style.left = "0px";
        form_login.style.display = "block";
        background_box_register.style.display = "block";
        background_box_login.style.display = "none"
    }
}
function register(){
    if(window.innerWidth > 850){
        form_register.style.display = "block";
        cointainer_login_register.style.left = "410px";
        form_login.style.display = "none";
        background_box_register.style.opacity = "0";
        background_box_login.style.opacity = "1";
    }else{

    form_register.style.display = "block";
    cointainer_login_register.style.left = "0px";
    form_login.style.display = "none";
    background_box_register.style.opacity = "none";
    background_box_login.style.opacity = "block";
    background_box_login.style.opacity = "1";
    }
}
