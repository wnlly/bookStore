import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './component/login'
import Login from './component';
import {HashRouter as Router ,Link,Route,Redirect}  from 'react-router-dom'
class App extends Component {
  render() {
    return (
     <div>
     <Router>
     <div>

 
        <Route path='/login' component={Login}></Route>
        <Route path='/index' component={Index}></Route>
        </div>
     </Router>
     
     </div>
    );
  }
}

export default App;
