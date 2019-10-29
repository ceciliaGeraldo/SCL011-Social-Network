export const initFirebase = () => {
    // Your web app's Firebase configuration
    let firebaseConfig = {
        
            apiKey: "AIzaSyDj0zwajsMuP1jQEs-PNakxaqzR3WWbRzI",
            authDomain: "camila-61ade.firebaseapp.com",
            databaseURL: "https://camila-61ade.firebaseio.com",
            projectId: "camila-61ade",
            storageBucket: "camila-61ade.appspot.com",
            messagingSenderId: "1026022199725",
            appId: "1:1026022199725:web:d28cda99bed24cc42fd124",
            measurementId: "G-3X36YKX459"
        }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

}
