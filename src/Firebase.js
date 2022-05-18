import firebase from 'firebase';

const settings ={timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDHgOlt29SLfiEVkFNR6Kdj2VoLjafEEV8",
  projectId: "chatterbox-198ee",
  databaseURL: "https://chatterbox-198ee-default-rtdb.firebaseio.com"
};

firebase.initializeApp(config);

export default firebase;