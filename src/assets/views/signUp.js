
//Vista de registros
import { createUser , validar2, authGoogle, authFacebook } from '/assets/js/auth.js'
import {templateLogIn} from '/assets/views/logIn.js'
import {valideImput ,validEmail , validPassword} from '/assets/js/validation.js'


export const templateSignUp = () =>{    
const divContainer = document.getElementById('root');
divContainer.innerHTML+=
        `<main>
            <div>
                <button id="login">Login</button>
                <button id="signUp">Sign Up</button>
                <input type="text" id="name" placeholder="Ingrese Nombre">
                <input type="email" id="email" placeholder="Ingrese correo" required="required" >
                <div id="root2"></div>
                <input type="password" id="password" placeholder="Ingrese contraseña">
                <button id="register">Registrarse</button>
                <button id="google">Google</button>
                <button id="facebook">Facebook</button>
            </div>
        </main>`

const  send = document.getElementById("register");
send.addEventListener("click", () => {

let email =document.getElementById("email").value;
let password =document.getElementById("password").value;

const divContainer2 = document.getElementById('root1');
const divContainer3 = document.getElementById('root2');

let printValidation = valideImput(email,password,name)


if(printValidation == true){
    divContainer2.innerHTML += "llena los campos"
}
else if(printValidation == false)
{
    divContainer2.innerHTML += "Todo listo"
}

let printValidationEmail = validEmail(email)
if(printValidationEmail  ==true){
    divContainer3.innerHTML += "Correo valido"
}
else {
    divContainer3.innerHTML += "Correo invalido"
}

validPassword(password)
createUser(email,password);
})

const logIn = document.getElementById("login");
logIn.addEventListener("click",()=>{
    divContainer.innerHTML="";
    templateLogIn();
})

const btnGoogle = document.getElementById("google");
btnGoogle.addEventListener("click",()=>{

    authGoogle();

})
const btnFacebook = document.getElementById("facebook");
btnFacebook.addEventListener("click",()=>{

    authFacebook();

})


}

