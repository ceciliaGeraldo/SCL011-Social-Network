import {templateSignUp} from '/assets/views/signUp.js'
import {authGoogle, authFacebook, LogIn} from '/assets/js/auth.js'


export const templateLogIn = () => {
    const divContainer = document.getElementById('root');
    divContainer.innerHTML +=
        `<main>
                <div>
                    <button id="login">Login</button>
                    <button id="signUp">Sign Up</button>

                    <input type="email" id="emailLogIn" placeholder="Ingrese correo">
                    <input type="password" id="passwordLogIn" placeholder="Ingrese contraseña">
                    <button id="GoHome">Ingresar</button>

                    <button id="google">Google</button>
                    <button id="facebook">Facebook</button>
                </div>
            </main>`
document.getElementById("signUp").addEventListener('click',()=>{
    divContainer.innerHTML="";
    templateSignUp();

    
})


document.getElementById("GoHome").addEventListener('click', ()=>{
    let emailLogIn =document.getElementById("emailLogIn").value;
    let passwordLogIn =document.getElementById("passwordLogIn").value;
    LogIn(emailLogIn,passwordLogIn )

const btnGoogle = document.getElementById("google");
btnGoogle.addEventListener("click",()=>{

    authGoogle();

})
const btnFacebook = document.getElementById("facebook");
btnFacebook.addEventListener("click",()=>{

    authFacebook();


})

}
