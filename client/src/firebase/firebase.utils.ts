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

export const createUserProfileDocument = async (
  userAuth: { uid: string; displayName: string; email: string },
  additionalData: Record<string, any>
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', (error as Error).message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const getUserCartRef = async (userId: number) => {
  const cartsRef = firestore.collection('carts').where('userId', '==', userId);
  const snapShot = await cartsRef.get();

  if (snapShot.empty) {
    const cartDocRef = firestore.collection('carts').doc();
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapShot.docs[0].ref;
  }
};

export const addCollectionAndDocuments = async <
  ObjectsToAddType extends firebase.firestore.DocumentData
>(
  collectionKey: string,
  objectsToAdd: ObjectsToAddType[]
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, obj);
  });

  await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections: {
  docs: firebase.firestore.DocumentSnapshot<{
    title: string;
    items: any[];
  }>[];
}) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()!;

    return {
      title,
      items,
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
    };
  });

  type TransformedCollection = typeof transformedCollection[0];

  return transformedCollection.reduce(
    (
      accumulator: Record<string, TransformedCollection>,
      current: TransformedCollection
    ) => {
      accumulator[current.title.toLowerCase()] = current;

      return accumulator;
    },
    {}
  );
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
