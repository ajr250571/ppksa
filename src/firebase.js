import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyADD5IDoy5DRhXidY1bDOOLqx4RJ8T_bC4",
  authDomain: "ppksa-ab7b1.firebaseapp.com",
  projectId: "ppksa-ab7b1",
  storageBucket: "ppksa-ab7b1.appspot.com",
  messagingSenderId: "5461434331",
  appId: "1:5461434331:web:50cd05b08e7442c518d1fe"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);