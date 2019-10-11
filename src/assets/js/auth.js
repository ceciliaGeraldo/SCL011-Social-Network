import {checkEmail} from '/assets/js/validation.js'
import {initFeed} from '/assets/views/feed.js'

//Crear usuario nuevo 

export const createUser = (email,password) =>{

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(()=>{
        checkEmail();
        initFeed();

        })
.catch(function(error) {
    // Handle Errors here.
    
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log(errorCode ); // errores que dicen que el email ya esta usado
    console.log(errorMessage )
    // ...
  })
}

//Validacion de campos vacios 

 export const validar2 = (email,password) => {
  if( email == "" &&  password == ""  && name == ""  ){
  return false;
  }
  else{
    return true; 
  }
}

// Acceso con usuario ya creado

export const LogIn = (emailLogIn, passwordLogIn ,) =>{
firebase.auth().signInWithEmailAndPassword(emailLogIn, passwordLogIn)
.catch(function(error) {
  // Handle Errors here.
  let errorCode = error.code;
  let errorMessage = error.message;

  console.log(errorCode );
  console.log(errorMessage )
  
  // ...
})
}
//Configuracion de un observador  , verifica que si hay un cambio de usuario o alguien se registra y ejecuta los comandos

export const observer = () => { 
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    let displayName = user.displayName;
    let email = user.email;
    let emailVerified = user.emailVerified;
    let photoURL = user.photoURL;
    let isAnonymous = user.isAnonymous;
    let uid = user.uid;
    let providerData = user.providerData;
    // ...
  } else {
      console.log("no exicte usuario");
      
    // User is signed out.
    // ...
  }
});   

}


//Create new user with Google
export const authGoogle = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider);
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
}


