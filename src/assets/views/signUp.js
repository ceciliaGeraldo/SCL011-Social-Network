
//Vista de registros
import { createUser , authGoogle, authFacebook } from '/assets/js/auth.js'
import {templateLogIn} from '/assets/views/logIn.js'
import {valideImput ,validEmail , validPassword, validRepeatPassword} from '/assets/js/validation.js'
import {templateSendingMail} from '/assets/views/sendingEmail.js'
//import { validPassword } from '../js/validation'

// View SignUp
export const templateSignUp = () =>{    
const divContainer = document.getElementById('root');
divContainer.innerHTML+=
        ` 
        <header>
            <div>
                <a href="#"><img src="/assets/images/cultivate-logo.png" alt="cultivate" class="logo"></a>
            </div>
        </header>
        <main>
            <div>
            <div id="topNavSign">
                <button class="login-tab" id="login">Login</button>
                <button class="login-tab" id="signUp">Registrarse</button>
            </div>
                    <p>Regístrate y comparte información relacionada a tus cultivos.</p>
                <input type="text" id="name" placeholder="Ingrese Nombre">
                <input type="email" id="email" placeholder="Ingrese correo" required="required" >
                <div id="root2"></div>
                <input type="password" id="password" placeholder="Ingrese contraseña">
                <div id="printResultPassword"></div>

                <input type="password" id="repeatPassword" placeholder="Repita contraseña">
                <div id="printResultRepeatPassword"></div>

                <button class="generic-btn" id="register">Registrarse</button>
            </div>
            <div id="logInFooter">

            ¿Ya tienes cuenta? Inicia sesión <a ><span class="link-bold" id="logInHere">aquí</span></a>

            </div>
        </main>`

const  send = document.getElementById("register");
send.addEventListener("click", () => {

let email =document.getElementById("email").value;
let password =document.getElementById("password").value;
let repeatPassword =document.getElementById("repeatPassword").value;
let name =document.getElementById("name").value;

const divContainer2 = document.getElementById('root1');
const divContainer3 = document.getElementById('root2');
const divResultPassword = document.getElementById('printResultPassword');
const divResultRepeatPassword = document.getElementById('printResultRepeatPassword');


//Limpiar imputs
document.getElementById('root1').innerHTML ="";
document.getElementById('root2').innerHTML="";
document.getElementById('printResultPassword').innerHTML="";



//Asigar error en caso que no complete todos los inputs
let printValidation = valideImput(email,password,name)


if(printValidation == true){
    divContainer2.innerHTML = "Completa todo los campos"
}

//Asignar error en caso de correo invalido

let printValidationEmail = validEmail(email)

if(printValidationEmail  ==true){
    divContainer3.innerHTML = "Correo valido"
}
else {
    divContainer3.innerHTML = "Correo invalido"
}

//Asignar error en caso de contraseña de menos de 6 caracteres

let printValidPassword =validPassword(password)
if(printValidPassword ==true){
    divResultPassword .innerHTML ="La contraseña debe tener como mínimo 6 carácteres"
}

//Asignar error en caso de contraseñas diferentes
let printValidRepeatPassword = validRepeatPassword(password, repeatPassword);
if(printValidRepeatPassword==false){
    divResultRepeatPassword.innerHTML="Las contraseñas no coinciden"
    console.log(printValidRepeatPassword)
}else {
    createUser(email,password);
}


})

const logIn = document.getElementById("login");
logIn.addEventListener("click",()=>{
    divContainer.innerHTML="";
    templateLogIn();
})

document.getElementById("logInHere").addEventListener('click', ()=>{
    divContainer.innerHTML="";
    templateLogIn();
})

}

// Vericar que el email ya ha sido verificado 
export const error1 = (errorCode) =>{
    if (errorCode == 'auth/email-already-in-use'){
      document.getElementById("root2").innerHTML= "Email ingresado ya fue registrado"
    //alert("ya usado")
    }}