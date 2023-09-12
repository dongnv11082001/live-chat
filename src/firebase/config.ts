import { initializeApp } from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAkB6GfGPBCIcByPCCVUbMslNI4c1cjkKo',
  authDomain: 'live-chat-49d3c.firebaseapp.com',
  projectId: 'live-chat-49d3c',
  storageBucket: 'live-chat-49d3c.appspot.com',
  messagingSenderId: '1002296007591',
  appId: '1:1002296007591:web:7a101269cb15bebcdff482',
  measurementId: 'G-V1L6VGHF03'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const timestamp = serverTimestamp();
const auth = getAuth(app);

export { db, timestamp, auth };
