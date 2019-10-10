
//Vista de registros

import { createUser , validar2} from '/assets/js/auth.js'
import {templateLogIn} from '/assets/views/logIn.js'


export const templateSignUp = () =>{
const divContainer = document.getElementById('root');
divContainer.innerHTML+=
        `<main>
            <div>
                <button id="login">Login</button>
                <button id="signUp">Sign Up</button>
                <input type="text" id="name" placeholder="Ingrese Nombre">
                <input type="email" id="email" placeholder="Ingrese correo">
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
let prueba = validar2(email,password)

if(prueba==false){
    divContainer2.innerHTML = "llena los campos"
}
//validar2(email,password)
createUser(email,password);
})

const logIn = document.getElementById("login");
logIn.addEventListener("click",()=>{
    divContainer.innerHTML="";
    templateLogIn();
})
}

