import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCgSFsGEqvDVcK8iUu15Lsj2vXq-QAdBtM',
  authDomain: 'facebook-clone-2fb55.firebaseapp.com',
  projectId: 'facebook-clone-2fb55',
  storageBucket: 'facebook-clone-2fb55.appspot.com',
  messagingSenderId: '465612491880',
  appId: '1:465612491880:web:cdd203d05c0f76e7debfdd',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const storage = firebase.storage();

export { db, storage };
