import {checkEmail} from '/assets/js/validation.js'
import {initFeed } from '/assets/views/feed.js'
import { error1 } from '/assets/views/signUp.js';
import {error2} from '/assets/views/logIn.js'



//Crear usuario nuevo 
export const createUser = (email,password) =>{

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(()=>{
        checkEmail();

        })
.catch(function(error) {
    // Handle Errors here.
    
    let errorCode = error.code;
    let errorMessage = error.message;
   
    error1(errorCode)
    // if (errorCode == error.code){
    //   alert("correo ya registrado")
    // }}
    console.log(errorCode); // errores que dicen que el email ya esta usado
    console.log(errorMessage )
    // ...
  })
}
// mostrar error de usuario ya registrado

export const registeredEmail = (errorCode) => {
    if (errorCode == 'auth/email-already-in-use'){
      //document.getElementById("root2").innerHTML= "ya usado"
    //lert("ya usado")
    return true 
    }}


// Acceso con usuario ya creado

export const LogIn = (emailLogIn, passwordLogIn) =>{

firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
.then(function(){

  const user = firebase.auth().currentUser;
  if(user.emailVerified===true){
    console.log("iniciar sesión, datos válidos");
    initFeed();
  }else{
    alert("no ha validado su mail");
  }
  
})

.catch(function(error) {
  // Handle Errors here.
 
  let errorCode = error.code;
  let errorMessage = error.message;

  console.log(errorCode);
  console.log(errorMessage);
  error2(errorCode)
 

  // if(errorCode == "auth/wrong-password"){
  //   alert("Contraseña incorrecta")
  // }
  // else if (errorCode == "auth/user-not-found" ){
  //   alert("Correo incorrecto o no registrado")
  // }
  //auth/wrong-password
  //auth/user-not-found 
  

  
  
  // ...
})
}
//Configuracion de un observador  , verifica que si hay un cambio de usuario o alguien se registra y ejecuta los comandos

export const observer = () => { 
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
    // User is signed in.
    console.log(user);
    
    let displayName = user.displayName;
    let email = user.email;
    let emailVerified = user.emailVerified;
    let photoURL = user.photoURL;
    let isAnonymous = user.isAnonymous;
    let uid = user.uid;
    let providerData = user.providerData;

    if(emailVerified === true){
      console.log("Iniciada sesión");
    }else{
      console.log("El correo no está registrado o no ha sido verificado")
    
  }

    // ...
  } else {
      console.log("no existe usuario");

    // User is signed out.
    // ...
  }
});   

}



//Create new user with Google
export const authGoogle = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
    initFeed();
}

const authentication = (provider) => {

    firebase.auth().signInWithPopup(provider).then((result) => {

        let token = result.credential.accessToken;
        let user = result.user;
    }).catch((error) => {
        // Handle Errors here.
        console.log(error);
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        console.log(credential);
    });

}

//Create new user with Facebook

export const authFacebook = () => {

    const provider = new firebase.auth.FacebookAuthProvider();
    authentication(provider);
    initFeed();
}

//Cerrar seción 
export const signOutSession = () => {

  firebase.auth().signOut()
  .then(function(){
    console.log("sesión cerrada")
  })
  .catch(function(error){
    console.log(error);
  })
}
