import firebase from 'firebase/app'
import 'firebase/auth'

// App's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJaEzqqxm-m0jFZK9ecRFlwYWSG9-yHgk",
    authDomain: "depot-d1820.firebaseapp.com",
    databaseURL: "https://depot-d1820.firebaseio.com",
    projectId: "depot-d1820",
    storageBucket: "depot-d1820.appspot.com",
    messagingSenderId: "1064124613371",
    appId: "1:1064124613371:web:392cc74400da487610665e",
    measurementId: "G-NVG47M86HX"
};

export const firebaseApp = firebase;

// Initialize Firebase
export const initFirebase = () => {
    firebase.initializeApp(firebaseConfig)
}