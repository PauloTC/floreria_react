import Rebase from 're-base'
import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyDnqduR5IlGZEf5DKVfMZSbaPkMdaeavmM",
  authDomain: "floritel-a65a3.firebaseapp.com",
  databaseURL: "https://floritel-a65a3.firebaseio.com",

})

const base = Rebase.createClass(firebaseApp.database())

//exporto una funcion del componente
export { firebaseApp }

//exporto por defecto
export default base;


