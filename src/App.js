import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Index from './component/index'
import Login from './component/login';

import {HashRouter as Router ,Link,Route,Redirect}  from 'react-router-dom'
import Register from './component/register';
class App extends Component {
  render() {
    return (
     <div>
     <Router>
     <div>

 
        <Route path='/login' component={Login}></Route>
        <Route path='/index' component={Index}></Route>
        <Route path='/register' component={Register}></Route>
        </div>
     </Router>
     
     </div>
    );
  }
}

export default App;
