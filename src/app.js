
import { initFirebase } from '/assets/js/initFirebase.js';
//import {templateSignUp} from '/assets/views/signUp.js';
import { templateCSS } from './assets/views/logIn2.js';
import {observer} from '/assets/js/auth.js'
//import { templateCSS } from './assets/views/logIn2.js';

//Inicializamos Firebase y el observador
const init = () => {

    initFirebase();
    templateCSS();
    //templateSignUp();
    //templateCSS();
    observer();
    //templateSignUp();
    

}

window.addEventListener('load',init);

