
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1yLDAZsRu0Q_MlCV6pCZ8kaQ-BXev1G0",
  authDomain: "lendsqr-3af2c.firebaseapp.com",
  projectId: "lendsqr-3af2c",
  storageBucket: "lendsqr-3af2c.appspot.com",
  messagingSenderId: "1059577497464",
  appId: "1:1059577497464:web:57bb620a3c6863099fea8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
// Initialize Firebase Authentication and get a reference to the servicej