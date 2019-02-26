const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {
    constructor(){
        this._config = {
            apiKey: "AIzaSyBADS1ThPRnt1jAOcs0pPaV-3VToM-zUaw",
            authDomain: "whatsapp-clone-4b7f3.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-4b7f3.firebaseio.com",
            projectId: "whatsapp-clone-4b7f3",
            storageBucket: "whatsapp-clone-4b7f3.appspot.com",
            messagingSenderId: "502511926922"
        }
        this.init();
    }

    init(){
        // Iniciando o  Firebase
        if (!this._initialized) {
            firebase.initializeApp(this._config);
            this._initialized = true;
        }
    }

    static db(){
        return firebase.firestore();
    }

    static hd(){
        return firebase.storage();
    }
}