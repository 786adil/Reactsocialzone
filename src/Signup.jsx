import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import fire from './fire';
import { NavLink } from 'react-router-dom';


  export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const  handleSubmit = (event) =>{
      event.preventDefault()
      console.log(email,password);
      
      fire.auth().createUserWithEmailAndPassword(email,password)
      .then(()=>{
        alert("User Created")
      }).catch(()=>{
        alert("Error Occured or user not created")
      })
    }

    return (
      <div className="App">
 <div id="preloader">
          <div className="jumper">
            <div />
            <div />
            <div />
          </div>
        </div>
        {/* ***** Preloader End ***** */}
        {/* ***** Header Area Start ***** */}
        <header className="header-area header-sticky">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="main-nav">
                  {/* ***** Logo Start ***** */}
                  <NavLink to="/" className="logo"> SocialZone </NavLink>
                  {/* ***** Logo End ***** */}
                  {/* ***** Menu Start ***** */}
                  <ul className="nav">
                    <li className="scroll-to-section">
                      <a href="#welcome" className="menu-item">Home</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#about" className="menu-item">About</a>
                    </li>
                    <li className="scroll-to-section">
                      <a href="#testimonials" className="menu-item">Team</a>
                    </li>
                    {/* <li class="submenu">
                  <a href="javascript:;">Drop Down</a>
                  <ul>
                    <li><a href="" class="menu-item">About Us</a></li>
                    <li><a href="" class="menu-item">Features</a></li>
                    <li><a href="" class="menu-item">FAQ's</a></li>
                    <li><a href="" class="menu-item">Blog</a></li>
                  </ul>
                </li> */}
                    <li className="scroll-to-section">
                      <a href="#contact-us" className="menu-item">Contact Us</a>
                    </li>
                    <NavLink to="login">
                    < button className="lsbtn" type="button"  >Login </button>
                    </NavLink>&nbsp;
                    
                    <NavLink to="signup">
                    <button className="lsbtn" type="button" >Sign In</button>
                    </NavLink>

                  </ul>
                  <a className="menu-trigger">
                    <span>Menu</span>
                  </a>
                  {/* ***** Menu End ***** */}
                </nav>
              </div>
            </div>
          </div>
        </header>

      <body className="bodylogin">
        <div className="divwrapper">

          <h2 className="su">
            Sign Up </h2><br/>

          <form className="f">
            <div className="input-group">
              <div className="input-box">
                <label className="label">Full Name</label>
                <input type="fname" 
                 id="fname" 
                 name="fname"
                 placeholder="enter full name" 
                 required className="name"
                 
                  />
                 <i className="fa fa-user" />
              </div>

            </div>

            <div className="input-group">
              <div className="input-box">
                <label className="label">Email</label>
                <input type="email" 
                 id="email" 
                 name="email"
                 placeholder="enter email address" 
                 required className="name"
                 onChange={(ev)=>setEmail(ev.target.value)}
                  />
                 <i className="fa fa-user" />
              </div>

            </div>

            <div className="input-group">
              <div className="input-box">
                <label className="label">Cell Number</label>
                <input type="number" 
                 id="number" 
                 name="number"
                 placeholder="enter number" 
                 required className="name"
               
                  />
                 <i className="fa fa-user" />
              </div>

            </div>

            <div className="input-group">
              <div className="input-box">
                <label className="label">Password</label>
                <input type="password" 
                id="password" 
                name="password"
                placeholder="enter password" 
                required className="name" 
                onChange={(ev)=>setPassword(ev.target.value)} />
                
                <i className="fa fa-lock" />
              </div>

            </div>

            <div className="button1">
              <button type="submit" onClick={handleSubmit} className="subbtn"><i class="fa fa-paper-plane"></i> Sign Up</button>
            </div>
         
          </form>

        </div>
      </body>
      </div>
  


    );
}


