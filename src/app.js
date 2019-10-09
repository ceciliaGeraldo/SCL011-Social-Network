import { initFirebase } from './models/initFirebase.js'

//Inicializamos Firebase y el observador
const init = () => {

    initFirebase();

}

window.addEventListener('load',init);