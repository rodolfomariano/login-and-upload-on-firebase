import firebase from 'firebase/app'

import 'firebase/auth'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyD4gTk5gCVJBNFb8aW_74O-Wt5LM4JyVWw",
    authDomain: "loginandupload-79285.firebaseapp.com",
    projectId: "loginandupload-79285",
  })
}



/*
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID
}


firebase.initializeApp(firebaseConfig)
// @ts-ignore
const auth = firebase.auth()
// @ts-ignore
const database = firebase.database()


export {
  firebase,
  auth, 
  database 
}

*/
export default firebase