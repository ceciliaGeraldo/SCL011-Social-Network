import { templateSignUp } from '/assets/views/signUp.js'
import { authGoogle, authFacebook, LogIn } from '/assets/js/auth.js'
import {templateForgotPassword} from '/assets/views/forgotPassword.js'

export const templateLogIn = () => {
    const divContainer = document.getElementById('root');
    divContainer.innerHTML +=
        `<header>
            <div class="signup-logo">
                <a href="#/home"><img src="/assets/images/cultivate-logo.png" alt="cultivate" class="logo"></a>
            </div>
        </header>
        <main>
            <div id="logInContainer">
                <div id="topNavSign">
                    <button class="login-tab" id="login">Login</button>
                    <button class="login-tab" id="signUp">Registrarse</button>
                </div>
                    
                    <p>Regístrate y comparte información relacionada a tus cultivos.</p>
                    <button  class="generic-btn" id="google">Iniciar sesión con Google</button>
                    <button  class="generic-btn" id="facebook">Iniciar sesión con Facebook</button>
                    
                    <input type="email" id="emailLogIn" placeholder="Correo electrónico">
                    <input type="password" id="passwordLogIn" placeholder="Contraseña">
                    <button class="generic-btn" id="GoHome">Ingresar</button>
                    
                    <a><p id="ifForgotPassword" class="link-bold">¿Olvidaste tu contraseña?</p></a>
                    
            <div> 
            <div id="logInFooter">
            ¿Aún no tienes cuenta? Regístrate  <a><span class="link-bold" id="registerHere">aquí</span></a>
            </div>
                    <div id="errorContainerLogIn"></div>
              
            </main>`
    document.getElementById("signUp").addEventListener('click', () => {
       divContainer.innerHTML = "";
       templateSignUp();



    });
    document.getElementById("ifForgotPassword").addEventListener('click', ()=>{

        divContainer.innerHTML="";
        templateForgotPassword();
    })
    document.getElementById("registerHere").addEventListener('click', ()=>{
        divContainer.innerHTML="";
        templateSignUp();
    })
    document.getElementById("GoHome").addEventListener('click', () => {
        let emailLogIn = document.getElementById("emailLogIn").value;
        let passwordLogIn = document.getElementById("passwordLogIn").value;

        //observer();
        LogIn(emailLogIn, passwordLogIn);

    });


    const btnGoogle = document.getElementById("google");
    btnGoogle.addEventListener("click", () => {

        authGoogle();

    });

    const btnFacebook = document.getElementById("facebook");
    btnFacebook.addEventListener("click", () => {

        authFacebook();


    });

}
//verificaciones de correo y contraseña con usuario ya registrado
export const error2 = (errorCode) => {
    if (errorCode == "auth/wrong-password" && errorCode == "auth/user-not-found") {
        document.getElementById("contenedor").innerHTML = "Clave y correo incorrectos"

    }
    else if (errorCode == "auth/user-not-found") {
        document.getElementById("errorContainerLogIn").innerHTML = "";
        document.getElementById("errorContainerLogIn").innerHTML = "Correo incorrecto o no registrado"

    }
    else if (errorCode == "auth/wrong-password") {
        document.getElementById("errorContainerLogIn").innerHTML = "";
        document.getElementById("errorContainerLogIn").innerHTML = "Clave incorrecta"
    }
}
    //alert("ya usado")
