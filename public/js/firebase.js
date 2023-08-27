import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC9DOcn6tKHoyP9RXesgj43cMKA1ZcPL4o",
  authDomain: "blog-website-fe9c2.firebaseapp.com",
  projectId: "blog-website-fe9c2",
  storageBucket: "blog-website-fe9c2.appspot.com",
  messagingSenderId: "1041192918144",
  appId: "1:1041192918144:web:2632d599d95ac4b0f2da65",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
