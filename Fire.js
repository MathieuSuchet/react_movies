import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore'
import Movie from './model/Movie'
import Comment from './model/Comment'

const firebaseConfig = {
  apiKey: "AIzaSyBJdPw0uuWHEFxiNxvk3XrG-8qE04t8CtE",
  authDomain: "movies-react-3a.firebaseapp.com",
  projectId: "movies-react-3a",
  storageBucket: "movies-react-3a.appspot.com",
  messagingSenderId: "433096984917",
  appId: "1:433096984917:web:373d95a3614cdb324147dc"
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default class Fire {
  getMovies (callback) {
    const q = query(collection(db, 'movies'), orderBy('title', 'asc'))
    onSnapshot(q, snapshot => {
      let movies = []
      snapshot.forEach(doc => {
        let data = doc.data()
        let comments = []
        data.comments.forEach(comment => {
          comments.push(new Comment(comment.author, comment.content, comment.mark))
        })
        movies.push(new Movie(doc.id, data.title, data.synopsis, data.image, comments))
      })
      callback(movies)
    })
  }

  addMovie (movie) {
    addDoc(collection(db, 'movies'), movie)
  }

  updateMovie (movie) {
    updateDoc(doc(db, 'movies', movie.id), movie)
  }

  deleteMovie (movie) {
    deleteDoc(doc(db, 'movies', movie.id))
  }
}
