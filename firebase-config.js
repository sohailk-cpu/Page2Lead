// firebase-config.js
// Add this file to your project

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDqDXUNkhq2uNvtutkSS_opIC9V2Prnh0",
  authDomain: "page2lead.firebaseapp.com",
  projectId: "page2lead",
  storageBucket: "page2lead.firebasestorage.app",
  messagingSenderId: "976763674892",
  appId: "1:976763674892:web:4f7f6695ebec6f3fdbe929"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// Make available globally
window.firebase = firebase;
window.db = db;
window.auth = auth;
window.storage = storage;
