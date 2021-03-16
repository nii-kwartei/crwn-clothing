import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLDjocgvoD4g8o90o-_ELYybPj_JSMX4o",
    authDomain: "crwn-db-6e61c.firebaseapp.com",
    projectId: "crwn-db-6e61c",
    storageBucket: "crwn-db-6e61c.appspot.com",
    messagingSenderId: "526688645138",
    appId: "1:526688645138:web:0ea59a6ef4ee51cf2268cb",
    measurementId: "G-PXBN21Z0HK"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;