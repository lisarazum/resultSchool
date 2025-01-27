// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAvI3ukwZZLu3blG5RLv_-9sNTrymj4biM',
	authDomain: 'todos-872e7.firebaseapp.com',
	projectId: 'todos-872e7',
	storageBucket: 'todos-872e7.firebasestorage.app',
	messagingSenderId: '605462245202',
	appId: '1:605462245202:web:b5efa25ddb3e87c340548b',
	databaseURL: 'https://todos-872e7-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
