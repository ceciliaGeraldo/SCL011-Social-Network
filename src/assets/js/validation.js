//Enviar mensaje de verificación al usuario
export const checkEmail = () =>{

    let user = firebase.auth().currentUser;
    
    user.sendEmailVerification().then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
    
}
