import { initializeApp } from 'firebase/app'; 
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword 
    } from 'firebase/auth'; 

import {  
    doc,
    getFirestore, 
    getDoc, 
    setDoc 
    } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBJc6Fx0EBACln5I9NvGn8FSPl2EzibNnY",
    authDomain: "crwn-clothing-db-894fa.firebaseapp.com",
    projectId: "crwn-clothing-db-894fa",
    storageBucket: "crwn-clothing-db-894fa.appspot.com",
    messagingSenderId: "383243469507",
    appId: "1:383243469507:web:6b83bae1c194a26cb89876"
};

//initializing the firebase app
const firebaseApp = initializeApp(firebaseConfig);

//getting the Google provider and settings the paramethers
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//This is the data base that we are gonna use when calling the doc, getDoc, setDoc methods, which take a paramether called db
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, otherInfo) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...otherInfo
            });
        } catch(error) {
            console.log("There was an error creating the User", error);
        }
    }

    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

