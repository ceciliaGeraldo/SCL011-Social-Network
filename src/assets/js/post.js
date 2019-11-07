// Crear post 
import {imprimir} from '/assets/views/feed.js'


export const createPost = ()=>{
    
let db = firebase.firestore(); 

db.collection("users").add({
    uId: firebase.auth().currentUser.email,
    userName: firebase.auth().currentUser.displayName,
    text :document.getElementById("textareaPost").value, 
    date: new Date(),
    
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

// .onSnapshot Para imprimir los post en tiempo "real" en pantalla
// QuerySnapshot  contiene los resultados de una consulta



//let container = document.getElementById("root");
export let printResultPost = () =>{
  let db = firebase.firestore(); 
  db.collection("users").onSnapshot((querySnapshot) => {
  //document.getElementById("root").innerHTML = "";
  document.getElementById("rootPost").innerHTML = ""
    querySnapshot.docs.forEach((doc) => {
   // console.log(doc);
    
        imprimir(doc)
    
      // console.log(doc.data().text);
      
       // console.log(`${doc.id} => ${doc.data()}`);
      //   container.innerHTML +=`
      //   <p>${doc.data().text}</p>
                            
      //   `
    });
  });
  }


