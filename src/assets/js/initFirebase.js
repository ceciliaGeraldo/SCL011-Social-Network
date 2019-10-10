export const initFirebase = () => {
    // Your web app's Firebase configuration
    let firebaseConfig = {
        apiKey: "AIzaSyCQO4IsccRRtXeskhNL0TsaxPxzy83K8EA",
        authDomain: "cultivate-rrss.firebaseapp.com",
        databaseURL: "https://cultivate-rrss.firebaseio.com",
        projectId: "cultivate-rrss",
        storageBucket: "",
        messagingSenderId: "711064674513",
        appId: "1:711064674513:web:fd4e204a0569bf165a65f0",
        measurementId: "G-HCVN6YHPYG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
}

