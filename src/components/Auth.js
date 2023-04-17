import React,{useState} from 'react'
import{auth} from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Cookies from 'universal-cookie'
const cookies=new Cookies();

function Auth({setIsAuth}) {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    async function signin(){
        try{
            const res=await createUserWithEmailAndPassword(auth,email,password); //signup
            console.log("signup successful!");
        }catch(err){
            console.log(err);
        }
    }
    
  return (
    <div>
      <input type='email' placeholder='email...' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type='password' placeholder='password*****' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={signin}>signin</button>
    </div>
  )
}

export default Auth