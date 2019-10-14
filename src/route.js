/*import {templateLogin} from '/assets/js/views/logIn.js'

/* changeRouter llama a la función que carga cada template 
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
  
    if (hash === '#/create') {
      return showTemplate(hash);
    }
  
    if (hash === '#/profile') {
      return showTemplate(hash);
    }
  
    if (hash === '#/feed') {
      return showTemplate(hash);
    }
  
    if (hash === '#/createEvent') {
  
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
        containerRoot.appendChild(templateLogin());
      break;
      case 'create':
        containerRoot.appendChild(templateCreate());
      break;
      case 'profile':
        containerRoot.appendChild(templateProfile());
      break;
      case 'feed':
        containerRoot.appendChild(templateFeed());
      break;
      case 'createEvent':
        containerRoot.appendChild(templateCreateEvent());
      break;
      default:
        containerRoot.innerHTML = `<p>Error 404</p>`
    }
  }
  
  /* initRouter es la función que 'escucha' los cambios de hash 
  export const initRouter = () => {
    window.addEventListener('load', changeRouter(window.location.hash));
  
    // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
    if ('onhashchange' in window) {
      window.onhashchange = () => {
        changeRouter(window.location.hash);
      }
    }
  }
  */