
//Vista de registros
import { createUser } from '/models/auth.js'

export const templateSignUp = () =>{
const divContainer = document.getElementById('root');
divContainer.innerHTML+=
        `<main>
            <div>
                <input type="text" id="name" placeholder="Ingrese Nombre">
                <input type="email" id="email" placeholder="Ingrese correo">
                <input type="password" id="password" placeholder="Ingrese contraseña">
                <button id="register">Registrarse</button>
            </div>
        </main>`


const  send = document.getElementById("register");
send.addEventListener("click", () => {

let email =document.getElementById("email").value;
let password =document.getElementById("password").value;
createUser(email,password);
})
        
}