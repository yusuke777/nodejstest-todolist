import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyCCa7u02A3oPetOQjw7fdUHgdKCq50xWwg",
  authDomain: "test-hogehoge-ddbd3.firebaseapp.com",
  databaseURL: "https://test-hogehoge-ddbd3.firebaseio.com",
  projectId: "test-hogehoge-ddbd3",
  storageBucket: "test-hogehoge-ddbd3.appspot.com",
  messagingSenderId: "133434285345"
};
firebase.initializeApp(config);

  export default firebase;