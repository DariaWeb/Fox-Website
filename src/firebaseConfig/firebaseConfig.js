import firebase from 'firebase/app'



// Initialize Firebase
var config = {
    apiKey: "AIzaSyD98HpxadEseJ9KGg0eXyiTgDgpYmhZA1g",
    authDomain: "wolf-and-fox-57be0.firebaseapp.com",
    databaseURL: "https://wolf-and-fox-57be0.firebaseio.com",
    projectId: "wolf-and-fox-57be0",
    storageBucket: "wolf-and-fox-57be0.appspot.com",
    messagingSenderId: "93887451622"
  };
  firebase.initializeApp(config);
  

  export default firebase;