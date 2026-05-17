import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAA6mbdYfLrrgCJjN47PX91_mU7I53RiBs',
  authDomain: 'site-c67b4.firebaseapp.com',
  projectId: 'site-c67b4',
  storageBucket: 'site-c67b4.firebasestorage.app',
  messagingSenderId: '744761377245',
  appId: '1:744761377245:web:3ddaee14f184716eeef634'
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const CLOUDINARY_CLOUD = 'dbljkloal'
export const CLOUDINARY_PRESET = 'clowofficial'
