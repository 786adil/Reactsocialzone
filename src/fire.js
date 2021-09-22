import firebase from 'firebase';


var firebaseConfig = {
    
    apiKey: "AIzaSyA2YilWz3dBmIW5oNk4jrymfLonivSbeK8",
    authDomain: "social-zone-635cc.firebaseapp.com",
    projectId: "social-zone-635cc",
    storageBucket: "social-zone-635cc.appspot.com",
    messagingSenderId: "89599319668",
    appId: "1:89599319668:web:03b28b8fa9ee1d66273b21"

};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;