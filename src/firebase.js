import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCI7Vjxknp3whMfUJjxtFIGysCki8iJtUE",
    authDomain: "biblio-724a2.firebaseapp.com",
    projectId: "biblio-724a2",
    storageBucket: "biblio-724a2.appspot.com",
    messagingSenderId: "798596900363",
    appId: "1:798596900363:web:39445bff42f1b00331090e",
    measurementId: "G-DGVDPKKCSV"
};
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app