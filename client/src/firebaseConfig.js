import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyALep5h7owUTOxvLMOX-uRQtuqfLYhK4A4",
    authDomain: "e-learning-9e559.firebaseapp.com",
    projectId: "e-learning-9e559",
    storageBucket: "e-learning-9e559.appspot.com",
    messagingSenderId: "584339417100",
    appId: "1:584339417100:web:62f071db6a1d4c7698a629",
    measurementId: "G-MZC1M8FNCB"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
