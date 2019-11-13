import {templateLogIn} from './assets/views/logIn.js'
import {templateSignUp} from './assets/views/signUp.js'
import {templateSendingMail} from './assets/views/sendingEmail.js'
import {initFeed} from './assets/views/feed.js'
import {templateForgotPassword} from './assets/views/forgotPassword.js'
import {templateHome} from './assets/views/home.js'



/* changeRouter llama a la función que carga cada template */
const changeRouter = (hash) => {
    if(hash === ''){
      return showTemplate('#/home');
    }
  
    if (hash === '#/home') {
      return showTemplate(hash);
    }
  
    if (hash === '#/login') {
      return showTemplate(hash);
    }
  
    if (hash === '#/register') {
      return showTemplate(hash);
    }
  
    if (hash === '#/sendingmail') {
      return showTemplate(hash);
    }
    if(hash === '#/forgotpassword'){
      return showTemplate(hash);
    }
  
    if (hash === '#/feed') {
      return showTemplate(hash);
    }
  
   
  
  }
  
  // imprimirá el template en el html
  export const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';
  
    // hacemos el match del hash utilizado y el template que queremos mostrar
    switch (router) {
      case 'home':
        containerRoot.appendChild(templateHome());
      break;
      case 'login':
        containerRoot.appendChild(templateLogIn());
      break;
      case 'register':
        containerRoot.appendChild(templateSignUp());
      break;
      case 'sengingmail':
        containerRoot.appendChild(templateSendingMail());
      break;
      case 'forgotpassword':
        containerRoot.appendChild(templateForgotPassword());
        break;
      case 'feed':
        containerRoot.appendChild(initFeed());
      break;
     
      default:
        containerRoot.innerHTML = `<p>Error 404</p>`
    }
  }
  
  /* initRouter es la función que 'escucha' los cambios de hash */
export const initRouter = () => {
  window.addEventListener('load', changeRouter(window.location.hash));

  // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRouter(window.location.hash);
    }
  }
  
}
  