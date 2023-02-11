import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBl7Xt0cqXTsXG-g-1C4E76zMDsMh7-7Zk",
  authDomain: "smit-hackathon-46f5e.firebaseapp.com",
  projectId: "smit-hackathon-46f5e",
  storageBucket: "smit-hackathon-46f5e.appspot.com",
  messagingSenderId: "402522362031",
  appId: "1:402522362031:web:10d2fa20d8c9827c20845a",
  measurementId: "G-17CYDXWGG0",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export default storage;
