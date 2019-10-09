// crear usuario nuevo 

export let createUser =firebase.auth().createUserWithEmailAndPassword(email, password)
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  })

// acceso con usuario ya creado

// Ingresar con google

// ingresae con facebook

