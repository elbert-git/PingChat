// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signOut, signInWithPopup} from 'firebase/auth';
//import {getFirestore, collection, onSnapshot, query, orderBy} from 'firebase/firestore';
import {getFirestore, collection, query, orderBy, limit} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtT8yjrw6s7xksGHfIZGuWH95pJ_UCthI",
  authDomain: "ping-chat-c31fd.firebaseapp.com",
  projectId: "ping-chat-c31fd",
  storageBucket: "ping-chat-c31fd.appspot.com",
  messagingSenderId: "381531138002",
  appId: "1:381531138002:web:055a70d98ffe9d36d68a0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const auth = getAuth();
const provider = new GoogleAuthProvider();

export let currentUser = auth.currentUser;

export function firebaseLogIn(){
	signInWithPopup(auth, provider)
	.then((result) => {
		console.log("log in");
		// This gives you a Google Access Token. You can use it to access the Google API.
		const credential = GoogleAuthProvider.credentialFromResult(result);
		const token = credential.accessToken;
	}).catch((error) => {
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used.
		const email = error.email;
		// The AuthCredential type that was used.
		const credential = GoogleAuthProvider.credentialFromError(error);
	});
}
 
export function firebaseLogOut(){
	signOut(auth).then(() => {
		console.log("log out");
	}).catch((error) => {
		console.log(error);
	})
}
 
// --- export database objects
export const db = getFirestore();
export const chatCollection = collection(db, "ChatData");
export const queryCall = query(chatCollection, orderBy('timeStamp', "desc"), limit(25));
