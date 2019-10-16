import {templateSendingMail} from '/assets/views/sendingEmail.js'
//Enviar mensaje de verificación al usuario
export const checkEmail = () =>{

    let user = firebase.auth().currentUser;
    
    user.sendEmailVerification().then(function() {
      // Email sent.
      
      console.log("enviando correo");
      templateSendingMail();
      
    }).catch(function(error) {
      // An error happened.
    });
    
}

//Validacion de campos vacios 

export const valideImput = (email,password,name) => {
  if( email == "" || password =="" || name == "" ){
  return true
  }
  else{
    return false
  }
} 

//Validar email correcto

export const validEmail= (email)=> {
  let expr = /^\S+@\S+\.\S+$/
  if ( expr.test(email) ){
      return true
}
else {
  return false
}
}

//validar contraseña de mas de 6 caracteres

export const validPassword = (password)=> {
  if ( password.length<6 ){
      return true
}
else {
  return false
}
}

//validar que el email no se repita

export const validRepeatPassword = (password, repeatPassword) => {
  if (password == repeatPassword){
    return true
  }
  else {
    return false
  }
}


//Vericar que los campos esten
