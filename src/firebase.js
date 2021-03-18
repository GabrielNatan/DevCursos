import app from 'firebase/app'
import  'firebase/auth'
import 'firebase/database'
let firebaseConfig = {
    apiKey: "AIzaSyBj_dRxD4fuX48a0v8RCjwSB8dlDRmMAeg",
    authDomain: "devcursos-2d643.firebaseapp.com",
    projectId: "devcursos-2d643",
    storageBucket: "devcursos-2d643.appspot.com",
    messagingSenderId: "465162186298",
    appId: "1:465162186298:web:63e7e38a34199866f68f03"
  };
  // Initialize Firebase
  
  
  class Firebase{
    constructor(){
        app.initializeApp(firebaseConfig);

    }      

    login(email,password){
        return app.auth().signInWithEmailAndPassword(email, password)

    }

    async register(name,email,password){
        await app.auth().createUserWithEmailAndPassword(email,password)
        
        const uid = app.auth().currentUser.uid;

        return app.database().red('usuarios').child(uid).set({
            name:name
        })
    }

    isInitialized(){
        return new Promise(resolve =>{
            app.auth().onAuthStateChanged(resolve)
        })
    }

}

export default new Firebase()