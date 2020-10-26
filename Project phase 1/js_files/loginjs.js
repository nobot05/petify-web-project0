//var loginSwitch = document.getElementById("login");
//var signupSwitch = document.getElementById("signup");
//var signupContainer = document.getElementById("signup-container");
//var loginContainer = document.getElementById("login-container");

function loginMove(){
var loginSwitch = document.getElementById("login");
var signupSwitch = document.getElementById("signup");
var signupContainer = document.getElementById("signup-container");
var loginContainer = document.getElementById("login-container");
var loginSignupContainer = document.getElementById("login-signup-container");

    signupContainer.style.animation = "fadeOut";
    signupContainer.style.animationDuration = "1.5s";
    signupContainer.style.animationFillMode = "forwards";

    loginSwitch.style.animation = "switch";
    loginSwitch.style.animationDuration = "1s";

    var elm = loginSwitch;
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);


    loginContainer.style.animation = "fadeIn";
    loginContainer.style.animationDuration = "1.5s";
    loginContainer.style.animationFillMode = "forwards";

    loginSignupContainer.style.animation = "borderLogin";
    loginSignupContainer.style.animationDuration = "1.5s";
    loginSignupContainer.style.animationFillMode = "forwards";

    console.log("Hi");
}

function signupMove(){
var loginSwitch = document.getElementById("login");
var signupSwitch = document.getElementById("signup");
var signupContainer = document.getElementById("signup-container");
var loginContainer = document.getElementById("login-container");
var loginSignupContainer = document.getElementById("login-signup-container");

    loginContainer.style.animation = "fadeOut";
    loginContainer.style.animationDuration = "1.5s";
    loginContainer.style.animationFillMode = "forwards";


    signupSwitch.style.animation = "switch";
    signupSwitch.style.animationDuration = "1s";

    var elm = signupSwitch;
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);

    signupContainer.style.animation = "fadeIn";
    signupContainer.style.animationDuration = "1.5s";
    signupContainer.style.animationFillMode = "forwards";

    loginSignupContainer.style.animation = "borderSignup";
    loginSignupContainer.style.animationDuration = "1.5s";
    loginSignupContainer.style.animationFillMode = "forwards";

    console.log("Hi");
}
