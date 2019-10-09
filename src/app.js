import { initFirebase } from '/models/initFirebase.js';
import {templateSignUp} from '/views/signUp.js';

//Inicializamos Firebase y el observador
const init = () => {

    initFirebase();
    templateSignUp();

}

window.addEventListener('load',init);