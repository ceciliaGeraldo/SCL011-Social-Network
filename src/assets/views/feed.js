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
         <hr>


        <main>
                <div id="containerPost">
                    <textarea class=""  id="textareaPost" placeholder="Escribe tus datos aquí"></textarea>  
                    <p id="alertpost"></div>
                    <button id="post">Publicar</button>

                    <button id="signOut">Cerrar Sesión</button>
                    <div id="rootPost"></div>
                </div>
                
                
                
               
            </main>
            
            <footer id="fixedMenu">
                <a  class="icono"><i class="fas fa-home"></i></a>
                <a class="icono"><i class="fas fa-sign-out-alt"></i></a>
                </footer>  
            
            `
            

            printResultPost()
           

        
// Para crear Post

let printPost = document.getElementById("post");
let alertpost = document.getElementById("alertpost");
printPost.addEventListener("click",()=>{
let validationPost =  document.getElementById("textareaPost").value;


  if(validationPost=="" || validationPost.length<=6){
      alertpost.innerHTML ="Debes escribir un post de mínimo 7 caracteres"
  }
  
else if(validationPost.length>=7){ 
document.getElementById("alertpost").innerHTML="";
 
 createPost();     
 printResultPost(); 
 document.getElementById("textareaPost").value ="";
  
}

 })

const signOut = document.getElementById('signOut');
signOut.addEventListener("click", ()=>{
    signOutSession();
    divContainer.innerHTML="Sesión Cerrada";
    

})
}

// export const hola =(validationPost)=>{
// if(validationPost=="" && validationPost.lenght<6){
//     alert("dajdhajd");
//   }
//   else{
//     imprimir(doc)
//   }  
// }

 

// vista de post impresos


export let imprimir = (doc )=>{
 
    document.getElementById("rootPost").innerHTML += `

       
       <div id="printPost">
       <img id="iconCultivate"src="/assets/images/cultivate-icon.png">
       <div id="printPost2">
        <p class ="userName">${doc.data().userName}</p>
        <p class="email">${doc.data().uId}</p>
        <p class="text">${doc.data().text}</p>
        </div>  
    </div>
    <button id="deleteBtn">Eliminar Post</button>

    `
    // Borrar post
    
    let deleteBtnId = doc.id;
    console.log(deleteBtnId);
    
    let deletePostBtn = document.getElementById("deleteBtn");
    deletePostBtn.addEventListener("click", ()=>{
    
            deletePost(deleteBtnId)
    })

}





