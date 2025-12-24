const firebaseConfig = {
    apiKey: "AIzaSyBtAyoWwKTcOBvCXCoG2jshKzPOrck1eEg",
    authDomain: "anew-afd5d.firebaseapp.com",
    projectId: "anew-afd5d",
    storageBucket: "anew-afd5d.firebasestorage.app",
    messagingSenderId: "20299613510",
    appId: "1:20299613510:web:484c08e4878da7daeb1147",
    measurementId: "G-KS9YJ2VQSB"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();