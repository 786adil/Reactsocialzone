
import React, { useState } from "react";
import fire from "./fire";
import './App.css';


export default function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    // firebase 
    const  handleSubmit = (event) =>{
      event.preventDefault()
      console.log(email,password);
      fire.auth().signInWithEmailAndPassword(email,password).then(()=>{
        alert("Login success")
      }).catch((error)=>{
        alert("No user exist | ",error);
      })
    }
  
    const Logout = ()=>{
      fire.auth().signOut();
      alert("Log out Successfully")
    }
  
  return (
    <div className="home">
        <h1>Welcome To Home Page</h1>
        <div className="button-box">
                <button type="submit" onClick={Logout} className="logout"><i class="fa fa-paper-plane"></i>  Logout</button>
              </div>
        
</div>
  );
  }


