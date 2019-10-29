
import { initFirebase } from '/assets/js/initFirebase.js';
//import {templateLogIn} from './assets/views/logIn.js';
//import { templateCSS } from './assets/views/logIn2.js';
import {observer} from '/assets/js/auth.js'
import { initRouter } from './route.js';

//import { templateCSS } from './assets/views/logIn2.js';

//Inicializamos Firebase y el observador
const init = () => {

    initFirebase();
    observer();
    //templateCSS();

    initRouter();
    //templateSignUp();
    

}

window.addEventListener('load',init);


