//Enviar mensaje de verificación al usuario
export const checkEmail = () =>{

    let user = firebase.auth().currentUser;
    
    user.sendEmailVerification().then(function() {
      // Email sent.
      alert("Enviando correo de verificacion al correo")
      console.log("enviando correo");
      
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

//Vericar que los campos esten
