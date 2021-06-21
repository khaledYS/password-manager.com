import './App.css';
import {  useState, useEffect } from 'react';
import {useAuthState, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import firebase from './firebaseConfig'
import 'firebase/firestore';
import 'firebase/auth';
import SignIn from './component/Signed-in';
import SignOut from './component/Signed-out';

console.log(firebase.apps.length);


var db = firebase.firestore().collection('Users');
var auth = firebase.auth();
var email = 'ammarkhaled7654@gmail.com';
var password = 'Ammar@7654';


function App() {
  const [user, authIsLoading, authError] = useAuthState(auth);
  window.onresize = ()=>{
    var el =  document.querySelector('#root');
    console.log(el);
    el.style.height = `${window.innerHeight}px `;
  };
  window.onload = ()=>{
    var el =  document.querySelector('#root');
    console.log(el);
    el.style.height = `${window.innerHeight}px `;
  };
  function newUser(email, password){
    auth.createUserWithEmailAndPassword(email, password)
  }
  useEffect(()=>{
    if(user){
      db.doc(user.uid).get().then(e=>{
        if(!e.exist){
          db.doc(user.uid).set({
            added: true
          })
        }
      });
    }else{
      console.log("false")
    }
  }, [user])
  function signUser(email, password){
    auth.signInWithEmailAndPassword(email, password).then((cred)=>{

    });
  }
  function signOutUser(){
    auth.signOut();
  }
  useEffect(() => {
    console.log('just wanna remind you that authErorr value has been changed to', authError,user,authIsLoading);
  }, [authError,user,authIsLoading]);

return (
  <>
    <button style={{background: 'yellow', position: 'fixed', bottom: '10%', left: '0%',color:'black'}} onClick={()=>{
      console.log(authIsLoading,authError,user);
      auth.signOut();
    }}>hello</button>

    {/* {user ? <SignIn signOutUser={signOutUser}  /> : <SignOut authIsLoading={authIsLoading} newUser={newUser} signUser={signUser} />} */}
    <SignIn signOutUser={signOutUser}/>
  </>
)
}

export default App;
