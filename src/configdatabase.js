import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDpvJDseBlIYqeZJUWk63BudnOvZ0t-dmI",
    authDomain: "firedbrn.firebaseapp.com",
    databaseURL: "https://firedbrn.firebaseio.com",
    projectId: "firedbrn",
    storageBucket: "firedbrn.appspot.com",
    messagingSenderId: "226463178018"
  };
  export const firebaseApp= firebase.initializeApp(config);