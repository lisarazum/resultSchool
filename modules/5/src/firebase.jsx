// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyAnxJ9hHwfM39aTMslFO-ecGbXpSngGZAk',
	authDomain: 'products-test-c3fdb.firebaseapp.com',
	projectId: 'products-test-c3fdb',
	storageBucket: 'products-test-c3fdb.firebasestorage.app',
	messagingSenderId: '642553905702',
	appId: '1:642553905702:web:2e5e02c2e2856a9e85dce7',
	databaseURL:
		'https://products-test-c3fdb-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
