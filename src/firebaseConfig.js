import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAW5hOgCPQ0LXU6inz7BYKO-IzNuaATmkM",
  authDomain: "qrcode-ilyesse.firebaseapp.com",
  projectId: "qrcode-ilyesse",
  storageBucket: "qrcode-ilyesse.appspot.com",
  messagingSenderId: "291472353757",
  appId: "1:291472353757:web:bf54ee234dee48ba3bee34",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL };
