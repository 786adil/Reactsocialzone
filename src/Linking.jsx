import { Link, NavLink } from 'react-router-dom';
import './Style/Sidebar.css';
import fire from "./fire";
import React, { useState } from "react";
import Linkjson from './Jsondata/Link.json';
import Cards from './Cards';
import { connect } from 'react-redux';
import { setPost, addPost } from './action/linktAction'


export default function Linking() {
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
    useEffect(() => {
      setPost(Link);
    }, [])
  
    useEffect(() => {
      console.log(props.link, "props.link")
    }, [props.link])
  
    const Logout = ()=>{
      fire.auth().signOut();
      alert("Log out Successfully")
    }

  return (
    <>
     <body>
  <aside id="left-panel" className="left-panel">
          <nav className="navbar navbar-expand-sm navbar-default">
            <div id="main-menu" className="main-menu collapse navbar-collapse">
              <ul className="nav navbar-nav">
            <br/><br/>
            <li className="menu-title"></li>{/* /.menu-title */}
                <li className="menu-item-has-children dropdown">
                  <NavLink to="posting" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-cogs" />Post</NavLink>
          
                </li>
                <li className="menu-item-has-children dropdown">
                  <NavLink to="linking" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-table" />Link</NavLink>
           
                </li>
                <li className="menu-item-has-children dropdown">
                <NavLink to="notification" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th" />Notification</NavLink>
                
                </li>
                <li className="menu-item-has-children dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-th" />Forms</a>
                  <ul className="sub-menu children dropdown-menu">
                    <li><i className="menu-icon fa fa-th" /><a href="forms-basic.html">Basic Form</a></li>
                    <li><i className="menu-icon fa fa-th" /><a href="forms-advanced.html">Advanced Form</a></li>
                  </ul>
                </li>
                <li className="menu-title">Icons</li>{/* /.menu-title */}
                <li className="menu-item-has-children dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-tasks" />Icons</a>
                  <ul className="sub-menu children dropdown-menu">
                    <li><i className="menu-icon fa fa-fort-awesome" /><a href="font-fontawesome.html">Font Awesome</a></li>
                    <li><i className="menu-icon ti-themify-logo" /><a href="font-themify.html">Themefy Icons</a></li>
                  </ul>
                </li>
                <li>
                  <a href="widgets.html"> <i className="menu-icon ti-email" />Widgets </a>
                </li>
                <li className="menu-item-has-children dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-bar-chart" />Charts</a>
                  <ul className="sub-menu children dropdown-menu">
                    <li><i className="menu-icon fa fa-line-chart" /><a href="charts-chartjs.html">Chart JS</a></li>
                    <li><i className="menu-icon fa fa-area-chart" /><a href="charts-flot.html">Flot Chart</a></li>
                    <li><i className="menu-icon fa fa-pie-chart" /><a href="charts-peity.html">Peity Chart</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-area-chart" />Maps</a>
                  <ul className="sub-menu children dropdown-menu">
                    <li><i className="menu-icon fa fa-map-o" /><a href="maps-gmap.html">Google Maps</a></li>
                    <li><i className="menu-icon fa fa-street-view" /><a href="maps-vector.html">Vector Maps</a></li>
                  </ul>
                </li>
                <li className="menu-title">Extras</li>{/* /.menu-title */}
                <li className="menu-item-has-children dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="menu-icon fa fa-glass" />Pages</a>
                  <ul className="sub-menu children dropdown-menu">
                    <li><i className="menu-icon fa fa-sign-in" /><a href="page-login.html">Login</a></li>
                    <li><i className="menu-icon fa fa-sign-in" /><a href="page-register.html">Register</a></li>
                    <li><i className="menu-icon fa fa-paper-plane" /><a href="pages-forget.html">Forget Pass</a></li>
                  </ul>
                </li>
              </ul>
            </div>{/* /.navbar-collapse */}
          </nav>
        </aside>
        {/* /#left-panel */}
        {/* Right Panel */}
        <div id="right-panel" className="right-panel">
          {/* Header*/}
          <header id="header" className="header">
            <div className="top-left">
              <div className="navbar-header">
                <a className="navbar-brand" href="./"><h3 className="sz">Social Zone</h3></a>
                <a className="navbar-brand hidden" href="./"><img src="images/logo2.png" alt="Logo" /></a>
                <a id="menuToggle" className="menutoggle"><i className="fa fa-bars" /></a>
              </div>
            </div>
            <div className="top-right">
              <div className="header-menu">
                <div className="header-left">
                  <button className="search-trigger"><i className="fa fa-search" /></button>
                  <div className="form-inline">
                    <form className="search-form">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                      <button className="search-close" type="submit"><i className="fa fa-close" /></button>
                    </form>
                  </div>
                  <div className="dropdown for-notification">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="notification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-bell" />
                      <span className="count bg-danger">3</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="notification">
                      <p className="red">You have 3 Notification</p>
                      <a className="dropdown-item media" href="#">
                        <i className="fa fa-check" />
                        <p>Server #1 overloaded.</p>
                      </a>
                      <a className="dropdown-item media" href="#">
                        <i className="fa fa-info" />
                        <p>Server #2 overloaded.</p>
                      </a>
                      <a className="dropdown-item media" href="#">
                        <i className="fa fa-warning" />
                        <p>Server #3 overloaded.</p>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown for-message">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="message" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-envelope" />
                      <span className="count bg-primary">4</span>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="message">
                      <p className="red">You have 4 Mails</p>
                      <a className="dropdown-item media" href="#">
                        <span className="photo media-left"><img alt="avatar" src="images/avatar/1.jpg" /></span>
                        <div className="message media-body">
                          <span className="name float-left">Jonathan Smith</span>
                          <span className="time float-right">Just now</span>
                          <p>Hello, this is an example msg</p>
                        </div>
                      </a>
                      <a className="dropdown-item media" href="#">
                        <span className="photo media-left"><img alt="avatar" src="images/avatar/2.jpg" /></span>
                        <div className="message media-body">
                          <span className="name float-left">Jack Sanders</span>
                          <span className="time float-right">5 minutes ago</span>
                          <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                      </a>
                      <a className="dropdown-item media" href="#">
                        <span className="photo media-left"><img alt="avatar" src="images/avatar/3.jpg" /></span>
                        <div className="message media-body">
                          <span className="name float-left">Cheryl Wheeler</span>
                          <span className="time float-right">10 minutes ago</span>
                          <p>Hello, this is an example msg</p>
                        </div>
                      </a>
                      <a className="dropdown-item media" href="#">
                        <span className="photo media-left"><img alt="avatar" src="images/avatar/4.jpg" /></span>
                        <div className="message media-body">
                          <span className="name float-left">Rachel Santos</span>
                          <span className="time float-right">15 minutes ago</span>
                          <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="user-area dropdown float-right">
                  <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="user-avatar rounded-circle" src="images/admin.jpg" alt="User Avatar" />
                  </a>
                  <div className="user-menu dropdown-menu">
                    <a className="nav-link" href="#"><i className="fa fa- user" />My Profile</a>
                    <a className="nav-link" href="#"><i className="fa fa- user" />Notifications <span className="count">13</span></a>
                    <a className="nav-link" href="#"><i className="fa fa -cog" />Settings</a>
                    <a className="nav-link" href="#" onClick={Logout}><i className="fa fa-power -off" />Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* /#header */}
          {/* Content */}
        
          {/* /.site-footer */}
        </div>
        
      <div className="row">
        <div className="my-10">
          <h1 className="text-center"></h1>
          <br />
          <div className="container-fluid nav_bg">

            <div className="col-10 mx-auto">

              <div className="row gy-4">

                {
                  props.link.map((val, ind) => {
                    return <Cards key={ind}
                      imgsrc ={val.imgsrc}
                      title={val.title}
                      desc={val.desc}
                      

                    />

                  })

                }
            

              </div>
            </div>
          </div>
        </div>
      </div>
</body>
    </>
  )
  


};

const mapStateToProps = (state) => {
  return {
    link: state.LinkReducer.link
  };
}

export default connect(mapStateToProps)(Linking)