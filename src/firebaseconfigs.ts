import * as firebase from 'firebase/app'
import { getAuth,onAuthStateChanged, signOut,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {useIonToast } from "@ionic/react";
import { useRouteMatch } from 'react-router';



const Config = {
  apiKey: "AIzaSyCICefqaJxBwM-S8Zlf8vhuP1U5CpMIFXI",
  authDomain: "frndr-10ee0.firebaseapp.com",
  projectId: "frndr-10ee0",
  storageBucket: "frndr-10ee0.appspot.com",
  messagingSenderId: "782611515067",
  appId: "1:782611515067:web:56a1b3c6f2d8b4e5d40b9e",
  measurementId: "G-7RJ7GFLTKM"
};
firebase.initializeApp(Config);
const auth = getAuth();


export function getcurentuser() {
  return new Promise((resolve,reject) => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        resolve(user)
        // ...
      } else {
        // User is signed out
        // ...
        resolve(null)
      }
      unsub()
    })
  })
  
}
export async function loginUser(email: string,password: string) {
   return await signInWithEmailAndPassword(auth,email,password)
//  console.log(res.user)
//  return true   
// } catch (error){
//     console.log(error)
//     return false
// }

}
export async function createUser(email: string,password: string) {
  return await createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   console.log(useRouteMatch)
  //   // ...
  //   return user
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log(errorMessage)
  //   return errorMessage
    // ..
  };

  export async function Logout() {
    return signOut(auth)
  }





