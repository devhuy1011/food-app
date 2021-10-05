import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDRBu4VCy1u-97z8_goRhJ-5JLcN4UiKeQ",
    authDomain: "rn-food-app-a57e9.firebaseapp.com",
    projectId: "rn-food-app-a57e9",
    storageBucket: "rn-food-app-a57e9.appspot.com",
    messagingSenderId: "508297647073",
    appId: "1:508297647073:web:9cccfeadd3830f4ac8b8a0",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;