
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import {getFirestore, collection, addDoc  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
  const firebaseConfig = {
    apiKey: "AIzaSyDzWNluqbGRAwnWzb5iToT9LBIBmehE99A",
    authDomain: "new12-224f4.firebaseapp.com",
    projectId: "new12-224f4",
    storageBucket: "new12-224f4.firebasestorage.app",
    messagingSenderId: "357529545074",
    appId: "1:357529545074:web:ae8535de0fe010bb4655eb",
    measurementId: "G-DH8F4Z5DRC"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
let fortext = document.getElementById('txt');
const dataCollect = collection(db,"user");
const forid = document.getElementById('create')
forid.addEventListener('click', ok )
async function ok(){
try {
  let obj = {
  todo:fortext.value
  };
  const docRef = await addDoc(dataCollect, obj);
  console.log("Document written with ID: ", docRef.id);
  alert('This message has been saved in server')
} catch (e) {
  const errorMessage = error.Message ;
  console.error("Error adding document: ", e);
  alert("network issue")
} ;
let div = document.createElement('div');
div.textContent = fortext.value;
div.setAttribute('class', 'note');
document.body.appendChild(div);
 let button = document.createElement('button')
 button.textContent= "delete"
 button.setAttribute('class', 'del');
 document.body.appendChild(button)
  
 button.addEventListener('click',function(){
   button.remove(),div.remove()
 });
  };
  document.getElementById('light').addEventListener('click', function(){ 
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
  });
  document.getElementById('dark').addEventListener('click', function() {
    document.body.style.backgroundColor='black';
    document.body.style.color='white'
  });


