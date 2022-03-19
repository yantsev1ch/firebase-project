import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

firebase.initializeApp({
        apiKey: "AIzaSyChF09JNLGWRB2G6biNcm8BF6PmVJuo6cc",
        authDomain: "fir-test-project-b956b.firebaseapp.com",
        databaseURL: "https://fir-test-project-b956b-default-rtdb.firebaseio.com",
        projectId: "fir-test-project-b956b",
        storageBucket: "fir-test-project-b956b.appspot.com",
        messagingSenderId: "756264488627",
        appId: "1:756264488627:web:c8d0187cbe15e4f4766ac6"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);
