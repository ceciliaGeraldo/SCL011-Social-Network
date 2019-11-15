import {signOutSession} from '/assets/js/auth.js'
import {createPost ,printResultPost} from '/assets/js/post.js'
import {templateHome} from '/assets/views/home.js'


export const initFeed = () => {
    const divContainer = document.getElementById('root');
    divContainer.innerHTML = "";
    divContainer.innerHTML +=
        `<header id="headerDesk">
        <div>
            <a href="#/home"><img src="/assets/images/cultivate-logo.png" alt="cultivate" class="logofeed"></a>
            
            <a id="icono-Out" class="iconoHeader"><i class="fas fa-sign-out-alt"></i></a>
            <a id="" class="iconoHeader"><i class="fas fa-home"></i></a>
            
        </div>
         </header>
         <hr>


        <main>

        <div id="blockImg"></div>
                <div id="containerPost">
                
                    <textarea class=""  id="textareaPost" placeholder="Escribe tus datos aquí"></textarea>  
                    <p id="alertpost"> </div>
                    <div id="prueba"> 
                    
                    <button id="post">Publicar</button>

                    <div id="rootPost">
                    </div>
                    </div>
                </div>
                
               
            </main>
            <footer id="fixedMenu">
            <a id="" class="icono"><i class="fas fa-home"></i></a>
            <a  id="icono-OutResponsive" class="icono"><i class="fas fa-sign-out-alt"></i></a>
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

 const signOutResponsive = document.getElementById('icono-OutResponsive');
 signOutResponsive.addEventListener("click", ()=>{
    document.getElementById('root').innerHTML="";
    signOutSession()
    templateHome();

})

const signOut = document.getElementById('icono-Out');
signOut.addEventListener("click", ()=>{
    document.getElementById('root').innerHTML="";
    signOutSession()
    templateHome();
   
    

})
}

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
   
    
       

    `
    // Borrar post
    
    // let deleteBtnId = doc.id;
    // console.log(deleteBtnId);
    
  
    // let deletePostBtn = document.querySelector("#deleteBtn");
   
    
    // deletePostBtn.addEventListener("click", ()=>{
     
    //         deletePost(deleteBtnId)
       
    // })

}






