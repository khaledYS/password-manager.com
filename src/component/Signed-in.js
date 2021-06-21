import { useState } from "react";
import './css/signedIn.css';
import firebase from './../firebaseConfig'
import 'firebase/firestore';
import { useCollectionData } from "react-firebase-hooks/firestore";
var db = firebase.firestore();
const SignIn = (props) => {
    const [inputValue, setinputValue] = useState('');
    const [customeSearchIsOpened, setcustomeSearchIsOpened] = useState(false);

    const CustomeSearc = () => {
        return ( 
            <div className='customSearch'>
                <span onClick={(e)=>{customeSearchIsOpened ? setcustomeSearchIsOpened(false) : setcustomeSearchIsOpened(true)}}>X</span>
                <div>
                Account name based on Type : <select >
                    <option>none</option>
                    <option>email ex : example@example.com</option>
                    <option>user_name</option>
                    <option>@user_name</option>
                    <option>+phoneNumber</option>
                    <option>Other</option>
                </select>
                Account based on app :  <select>
                    <option>none</option>
                    <option>Other</option>
                    <option>Instagram</option>
                    <option>Yahoo</option>
                    <option>Gmail</option>
                    <option>Twitter</option>
                    <option>Whatsapp</option>
                    <option>Facebook</option>
                    <option>Wy Chat</option>
                    <option>LinkedIn</option>
                </select>
                </div>
                <button onClick={(e)=>{
                    var r = e.target.parentElement.querySelectorAll('div > select');
                    r.forEach(element => {
                        element.value  = 'none';
                    });
                }}>Reset</button>
        </div>
    
         );
    }
    return ( 
        <div className='signedin-div'>
            <div className='search-bar'>
                <input type='text' placeholder='Search by Email Or phone' onChange={(e)=>{setinputValue(e.target.value)}}/>
                {(inputValue == '') ? '': <button onClick={(e)=>{e.target.parentElement.querySelector('input[type="text"]').value = ''; setinputValue(e.target.parentElement.querySelector('input[type="text"]').value)}} data-search-deleter>X</button>}
            </div> 
            <div className='Accounts'>
                <button className='open-custom-search' onClick={(e)=>{customeSearchIsOpened ? setcustomeSearchIsOpened(false) : setcustomeSearchIsOpened(true)}}>custom Search</button>
                {customeSearchIsOpened ? <CustomeSearc/> : ''}
            </div>
            <div className='bottom-bar'>
                <div className='add-data-btn'>
                <svg xmlns="http://www.w3.org/2000/svg" height="70px" viewBox="0 0 448 448" width="40px">
                    <path fill='white' stroke='black' strokeWidth='9' d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0"/>
                </svg>
                </div>
            </div>
        </div>
     );
}
 
export default SignIn;