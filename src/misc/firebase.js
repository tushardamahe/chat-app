import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCgweBIvUElnyoLNZl6SiEX4flU6vnyaE4',
  authDomain: 'chat-app-d529f.firebaseapp.com',
  databaseURL:
    'https://chat-app-d529f-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'chat-app-d529f',
  storageBucket: 'chat-app-d529f.appspot.com',
  messagingSenderId: '516727168628',
  appId: '1:516727168628:web:afc551bba05c0a199a7b21',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
