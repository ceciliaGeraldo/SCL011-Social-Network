import {signOutSession} from '/assets/js/auth.js'
import {createPost ,printResultPost, deletePost } from '/assets/js/post.js'

export const initFeed = () => {
    const divContainer = document.getElementById('root');
    divContainer.innerHTML = "";
    divContainer.innerHTML +=
        `<header>
        <div>
            <a href="#/home"><img src="/assets/images/cultivate-logo.png" alt="cultivate" class="logofeed"></a>
        </div>
         </header>
        
        <main>
                <div id="containerPost">
                    <textarea class=""  id="textareaPost" placeholder="Escribe tus datos aquí"></textarea>  

                    <button id="post">Publicar</button>

                    <button id="signOut">Cerrar Sesión</button>
                    <div id="rootPost"></div>
                </div>
            </main>`

            printResultPost()
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

// vista de post impresos
export let imprimir = (doc)=>{
 
    document.getElementById("rootPost").innerHTML += `

    <div id="printPost">
        <p>${doc.data().userName}</p>
        <p>${doc.data().text}</p>
        <p>${doc.data().uId}</p>
        
    </div>
    <button id="signOut">Eliminar Post</button>

    `
    // Borrar post
    
    let deleteBtnId = doc.id;
    
    let deletePostBtn = document.getElementById("deleteBtn");
    deletePostBtn.addEventListener("click", ()=>{
            deletePost(deleteBtnId)
    })

}





