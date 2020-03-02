import { templateSignUp } from '/assets/views/signUp.js'
import {templateLogIn} from '/assets/views/logIn.js'


export const templateHome = () => {
    const divContainer = document.getElementById('root');
    divContainer.innerHTML +=
        `<header>
            
                <a href="#/home"><img src="/assets/images/cultivate-logo.png" alt="cultivate"></a>
                
                <button class="btn-nav" id="signUp">Registrarse</button>
                <button class="btn-nav" id="login">Iniciar Sesión</button>
                
               
           
        </header>
        <main>
            <div class="container">      
                <img src="/assets/images/bannerCultivate2.png" alt="bannerSeed" class="banner">
                <p id="banner-title" class="banner-text">Dedícate 100% a tu autocultivo</p>
                <p class="banner-text">¡Regístrate y sé parte de nuestra gran comunidad de horticulura!</p>
                <button id="btn-join" class="btn">Únete </button>   
            </div> 
            <div class="info-desktop">
                <img src="/assets/images/cultivate-rounded.png" alt="cultivate-redondo">
                <p id="info-title">¿Cómo funciona?</p>
                <p>Tan solo debes registrarte e iniciar sesión y ya serás parte de nuestra comunidad.
                En ella encontrarás gente con los mismos intereses en horticultura, dispuestos a compartir
                sus experiencias, sus tips e información. Únete y vive la experiencia <span>Cultivate</span>.</p>
            </div>
                  
              
        </main>
        <footer>
            <p>Cuenta</p>
            <p>Iniciar Sesión</p>
            <p>Registrarse</p>
            <p>Ayuda</p>
        </footer>
        `

    document.getElementById('signUp').addEventListener('click', ()=>{
        divContainer.innerHTML=""
        templateSignUp();
    })

    document.getElementById('login').addEventListener('click', ()=>{
        divContainer.innerHTML=""
        templateLogIn();
    })

    document.getElementById('btn-join').addEventListener('click', ()=>{
        divContainer.innerHTML="";
        templateSignUp();
    })
}