import Firebase from 'firebase'

let config = {
    apiKey: "AIzaSyDdQjRYLvoefMlvt4MnERvdMDOgQKMHs6A",
    authDomain: "trackapp-1ee1c.firebaseapp.com",
    databaseURL: "https://trackapp-1ee1c.firebaseio.com",
    projectId: "trackapp-1ee1c",
    storageBucket: "trackapp-1ee1c.appspot.com",
    messagingSenderId: "344172659813"
}

let fire = Firebase.initializeApp(config);
let db = fire.database();

export default db