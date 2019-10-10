
import { initFirebase } from '/assets/js/initFirebase.js';
import {templateSignUp} from '/assets/views/signUp.js';

//Inicializamos Firebase y el observador
const init = () => {

    initFirebase();
    templateSignUp();

}

window.addEventListener('load',init);