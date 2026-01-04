import { initializeApp, FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, Analytics } from "firebase/analytics";
import { initializeAuth, Auth } from 'firebase/auth';
//@ts-ignore
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyC968EOmw8EHxrXwUSxBwuUvijotkyFQjs",
    authDomain: "hse-ux-mindmap.firebaseapp.com",
    projectId: "hse-ux-mindmap",
    storageBucket: "hse-ux-mindmap.firebasestorage.app",
    messagingSenderId: "558903507977",
    appId: "1:558903507977:web:99cb67c207afbadd270cd8",
    measurementId: "G-WMYS0BJ74P"
};

// Инициализация Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
const auth: Auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


// Проверяем поддержку Analytics перед инициализацией
const analyticsPromise: Promise<Analytics | null> = isSupported().then(supported =>
    supported ? getAnalytics(app) : null
);

export { app, auth, analyticsPromise };
