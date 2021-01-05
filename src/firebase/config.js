import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBUSMfuM0xxJOy1gPcXjFX189t35KjVhTo",
  authDomain: "family-album-37bfe.firebaseapp.com",
  projectId: "family-album-37bfe",
  storageBucket: "family-album-37bfe.appspot.com",
  messagingSenderId: "204053342828",
  appId: "1:204053342828:web:620bccc39c889a201a8649"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };