import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCpg-3So0pAzTHvA_RUSTJrvgkQos2qXC4",
  authDomain: "survey-1571413046810.firebaseapp.com",
  databaseURL: "https://survey-1571413046810.firebaseio.com",
  projectId: "survey-1571413046810",
  storageBucket: "survey-1571413046810.appspot.com",
  messagingSenderId: "808796572426",
  appId: "1:808796572426:web:6d4a584d904eb6590ec8f3",
  measurementId: "G-LYW6PQR51R"
});

export default app;