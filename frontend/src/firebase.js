import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // ✅ Correct import
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCwGbK6__l2Mb_DfLNe3bCDGlD-Szolc74",
  authDomain: "finwise-6f84c.firebaseapp.com",
  projectId: "finwise-6f84c",
  storageBucket: "finwise-6f84c.appspot.com",
  messagingSenderId: "318061228638",
  appId: "1:318061228638:web:787f05ce8ca5a639cafacf",
  measurementId: "G-Q4GH83JL40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Auth and Provider setup
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// ✅ Optional: Analytics setup
const analytics = getAnalytics(app);
