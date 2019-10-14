import {signOutSession} from '/assets/js/auth.js'

export const initFeed = () => {
    const divContainer = document.getElementById('root');
    divContainer.innerHTML = "";
    divContainer.innerHTML +=
        `<main>
                <div>
                    <h1>Hola Mundo, bienvenid@ al feed</h1>
                    <button id="signOut">Cerrar Sesión</button>
                </div>
            </main>`

const signOut = document.getElementById('signOut');
signOut.addEventListener("click", ()=>{
    signOutSession();
    divContainer.innerHTML="Sesión Cerrada";

})
}