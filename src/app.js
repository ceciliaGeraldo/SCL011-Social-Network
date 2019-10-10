
import { initFirebase } from '/assets/js/initFirebase.js';
//import {templateSignUp} from '/assets/views/signUp.js';
import { templateCSS } from './assets/views/logIn2.js';

//Inicializamos Firebase y el observador
const init = () => {

    initFirebase();
    templateCSS();

}

window.addEventListener('load',init);