import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdWAirZWON2v4ibkmByJeDoORVSK3hRHA",
  authDomain: "api-test-9aee7.firebaseapp.com",
  projectId: "api-test-9aee7",
  storageBucket: "api-test-9aee7.appspot.com",
  messagingSenderId: "538183278678",
  appId: "1:538183278678:web:6e3da8be898098a9a9dbf7",
  measurementId: "G-E4WFFTBR1F",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
