import logo from './logo.svg';
import Main from './Main';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { Component } from 'react';
import fire from './fire';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Cards from './Cards';
import Posting from './Posting';
import Basket from './Basket';
import Linking from './Linking';
import Notification from './Notification';
import { connect } from 'react-redux';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
componentDidMount() {
  console.log(this.props,"post")
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }
  
  
  render (){

    return (
      <div className="App">
        
        <BrowserRouter>

    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signup" component={Signup} /> 
        <Route path="/welcome" component={Home} />  
        <Route path="/sidebar" component={Sidebar} />  
        <Route path="/linking" component={Linking} /> 
        <Route path="/notification" component={Notification} /> 
        {this.state.user ? (<Posting />)  : (<Login />)}
    

      </Switch>
  </BrowserRouter>

  </div>

  );
}
}
const mapStateToProps = (state) => {
  return {
    post: state.PostReducer
  };
}
export default connect(mapStateToProps)(App);