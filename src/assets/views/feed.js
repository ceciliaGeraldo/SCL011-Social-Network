import {signOutSession} from '/assets/js/auth.js'
import {createPost ,printResultPost } from '/assets/js/post.js'

export const initFeed = () => {
    const divContainer = document.getElementById('root');
    divContainer.innerHTML = "";
    divContainer.innerHTML +=
        `<main>
                <div>
                    <h1>Hola Mundo, bienvenid@ al feed</h1>
                    <textarea class=""  id="textareaPost" ></textarea>  

                    <button id="post">Publicar</button>

                    <button id="signOut">Cerrar Sesión</button>
                    <div id="rootPost"></div>
                </div>
            </main>`
// Para crear Post
//let textPost = document.getElementById("textareaPost"); 
           
let printPost = document.getElementById("post");
printPost.addEventListener("click",()=>{
  createPost()
 printResultPost()  
 
})

const signOut = document.getElementById('signOut');
signOut.addEventListener("click", ()=>{
    signOutSession();
    divContainer.innerHTML="Sesión Cerrada";
    

})
}
//let containerPost = document.getElementById("rootPost")
export let imprimir = (doc)=>{
 
    document.getElementById("rootPost").innerHTML += `
    <p>${doc.data().text}</p>
    <button id="signOut">Eliminar Post</button>
    `
}

