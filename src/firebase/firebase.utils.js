import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCon5R85XbCA-i_jwpIsCKp1-lYdU1W5m8',
  authDomain: 'tams-db.firebaseapp.com',
  databaseURL: 'https://tams-db.firebaseio.com',
  projectId: 'tams-db',
  storageBucket: 'tams-db.appspot.com',
  messagingSenderId: '176965391680',
  appId: '1:176965391680:web:f9a9ab9ed7d762e666d6a5',
  measurementId: 'G-JR1RETC5PN',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
