import { auth } from '../services/firebase';

export function signup(email, password) {
  return auth().createUserWithEmailAndPassword(email, password)
}

export function signin(email, password) {
  return auth().signInWithEmailAndPassword(email, password)
}

export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider()
  return auth().signInWithPopup(provider)
}

export function signout() {
  return auth().signOut()
}

// export function updateDisplayName(displayName, photoURL){
//   return auth().currentUser.updateProfile({
//     displayName: "",
//     photoURL: ''
//   }).then(function() {
//     // Update successful.
//   }).catch(function(error) {
//     console.log(error)
//   });
// }