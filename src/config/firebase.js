import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDDo8ANe05CR9QZ3D5IsoE0eoRIzPb1dP8",
  authDomain: "unielearn.firebaseapp.com",
  databaseURL: "https://unielearn.firebaseio.com",
  projectId: "unielearn",
  storageBucket: "unielearn.appspot.com",
  messagingSenderId: "880024819312",
  appId: "1:880024819312:web:23e64aac3566115e53c6b5",
  measurementId: "G-JNF9WZKZ9G"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase