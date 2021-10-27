import { NavLink } from 'react-router-dom';
import './Style/Posting.css';
import fire from "./fire";
import React, { useState } from "react";
import Post from './Jsondata/Post.json';
import { connect } from 'react-redux';
import { setPost, addPost } from './action/postAction'
import { useEffect } from 'react';


const Posting = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  useEffect(() => {
    setPost(Post);
  }, [])

  useEffect(() => {
    console.log(props.post, "props.post")
  }, [props.post])

  const addNewPost = () => {
    let newPost = {
      "imgsrc": "https://www.bootdey.com/img/Content/avatar/avatar1.png",
      "desc": "Digital content marketing has been never easy. A decade ago, this term was not in discussion. But as of today its very common and without digital content marketing, any business can survive. So marketing department need to move to digital platforms. But to train their staff they can not put them in real environment by investing money on advertisement. So zeoob provides social media simulators, which you can use to train your staff and students by creating marketing content without actually positing on social media. We have developed easy and fast Facebook post/status simulator",
      "comment": "Cool Picture Dude"
    }
    addPost(newPost);
  }
  // firebase 
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(email, password);
    fire.auth().signInWithEmailAndPassword(email, password).then(() => {
      alert("Login success")
    }).catch((error) => {
      alert("No user exist | ", error);
    })
  }


  const Logout = () => {
    fire.auth().signOut();
    alert("Log out Successfully")
  }
  return (
    <body>
      <aside id="left-panel" className="left-panel">
        <nav className="navbar navbar-expand-sm navbar-default">
          <div id="main-menu" className="main-menu collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <br /><br />
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
                <div className="div-inline">
                  <div className="search-div">
                    <input className="div-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search" />
                    <button className="search-close" type="submit"><i className="fa fa-close" /></button>
                  </div>
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
      <br />
      <center>
        <div className="container">
          <div className="col-lg-8">
            <div className="panel profile-cover">
              <div className="profile-cover__img" >


                {

                  // props.post.map(Post =>{
                  //   return(
                  //     <>
                  //     <img src={Post.imgsrc}></img>
                  //     </>
                  //   )

                  // }

                  // )

                }

                <h3 className="h3">Henry Foster</h3>
              </div>
              <div className="profile-cover__action bg--img" data-overlay="0.3">
                <button className="btn btn-rounded btn-info">
                  <i className="fa fa-plus" />
                  <span>Follow</span>
                </button>
                <button className="btn btn-rounded btn-info">
                  <i className="fa fa-comment" />
                  <span>Message</span>
                </button>
              </div>
              <div className="profile-cover__info">
                <ul className="nav">
                  <li><strong>26</strong>Projects</li>
                  <li><strong>33</strong>Followers</li>
                  <li><strong>136</strong>Following</li>
                </ul>
              </div>
            </div>
            <div className="panel">
              <div className="panel-heading">
                <h3 className="panel-title">Activity Feed</h3>
              </div>
              <div className="panel-content panel-activity">
                <div action="#" className="panel-activity__status">
                  <textarea name="user_activity" placeholder="Share what you've been up to..." className="div-control" defaultValue={""} />
                  <div className="actions">
                    <div className="btn-group">
                      <button type="button" className="btn-link" title data-toggle="tooltip" data-original-title="Post an Image">
                        <i className="fa fa-image" />
                      </button>
                      <button type="button" className="btn-link" title data-toggle="tooltip" data-original-title="Post an Video">
                        <i className="fa fa-video-camera" />
                      </button>
                      <button type="button" className="btn-link" title data-toggle="tooltip" data-original-title="Post an Idea">
                        <i className="fa fa-lightbulb-o" />
                      </button>
                      <button type="button" className="btn-link" title data-toggle="tooltip" data-original-title="Post an Question">
                        <i className="fa fa-question-circle-o" />
                      </button>
                    </div>
                    <button onClick={() => {
                      addNewPost();
                    }} className="btn btn-sm btn-rounded btn-info">
                      Post
                </button>
                  </div>
                </div>
                <ul className="panel-activity__list">
                  {

                    props.post.map(Post => {
                      return (
                        <li>
                          <i className="activity__list__icon fa fa-question-circle-o" />
                          <div className="activity__list__header">
                            <img src={Post.imgsrc} alt="" />
                            <a href="#">John Doe</a> Posted the question: <a href="#">{Post.comment}</a>
                          </div>
                          <div className="activity__list__body entry-content">
                            <blockquote>

                              <>
                                <p>{Post?.desc} Adil</p>
                              </>

                            </blockquote>
                          </div>
                          <div className="activity__list__footer">
                            <a href="#"> <i className="fa fa-thumbs-up" />123</a>
                            <a href="#"> <i className="fa fa-comments" />23</a>
                            <span> <i className="fa fa-clock" />2 hours ago</span>
                          </div>
                        </li>
                      )
                    }
                    )
                  }

                </ul>
              </div>
            </div>
          </div>
        </div>
      </center>
    </body>
  );
}


const mapStateToProps = (state) => {
  return {
    post: state.PostReducer.post
  };
}

export default connect(mapStateToProps)(Posting)