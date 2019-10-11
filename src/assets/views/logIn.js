import {templateSignUp} from '/assets/views/signUp.js'
import {authGoogle, authFacebook} from '/assets/js/auth.js'

export const templateLogIn = () => {
    const divContainer = document.getElementById('root');
    divContainer.innerHTML +=
        `<main>
                <div>
                    <button id="login">Login</button>
                    <button id="signUp">Sign Up</button>
                    <input type="emailSign" id="email" placeholder="Ingrese correo">
                    <input type="password" id="password" placeholder="Ingrese contraseña">
                    <button id="google">Google</button>
                    <button id="facebook">Facebook</button>
                </div>
            </main>`
document.getElementById("signUp").addEventListener('click',()=>{
    divContainer.innerHTML="";
    templateSignUp();

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
