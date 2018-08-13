import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    // Populate your firebase configuration data here.
    apiKey: "AIzaSyDdQjRYLvoefMlvt4MnERvdMDOgQKMHs6A",
    authDomain: "trackapp-1ee1c.firebaseapp.com",
    databaseURL: "https://trackapp-1ee1c.firebaseio.com",
    projectId: "trackapp-1ee1c",
    storageBucket: "trackapp-1ee1c.appspot.com",
    messagingSenderId: "344172659813"
  });
  
  // Export the database for components to use.
  // If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
  export const db = firebaseApp.database();