// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCQnH5F3Jqa-7GH04V2CjH73vgFFYgMB_k',
  authDomain: 'doga-b69c4.firebaseapp.com',
  projectId: 'doga-b69c4',
  storageBucket: 'doga-b69c4.appspot.com',
  messagingSenderId: '229187520578',
  appId: '1:229187520578:web:2baed1f9d3aa67c08b45db',
  measurementId: 'G-WJKTWFLGY7',
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAnalytics = typeof window !== 'undefined' ? getAnalytics(firebaseApp) : null;
