
import { initFirebase } from '/assets/js/initFirebase.js';
import {templateLogIn} from '/assets/views/logIn.js';
//import { templateCSS } from './assets/views/logIn2.js';
import {observer} from '/assets/js/auth.js'
//import { templateCSS } from './assets/views/logIn2.js';

//Inicializamos Firebase y el observador
const init = () => {

    initFirebase();
    //templateCSS();
    templateLogIn();
    observer();
    //templateSignUp();
    

}

window.addEventListener('load',init);

