//Enviar mensaje de verificación al usuario
export const checkEmail = () =>{

    let user = firebase.auth().currentUser;
    
    user.sendEmailVerification().then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
    
}

//Validacion de campos vacios (sige sin funcionar correctamwnte)

export const valideImput = (email,password,name) => {
  if( email == "" || password == ""  || name == ""  ){
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
      alert("Tu contraseña tiene menos de 6 caracteres")
}
else {
  return false
}
}

//validar que el email no se repita