import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute'


export class App extends Component {

  

  render() {
    return (   
         
       <BrowserRouter>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/portfolio" component={Portfolio}/>
             <Route path="/resume" component={Resume}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/login" component={Login}/>
             <ProtectedRoute path="/users"></ProtectedRoute>
            <Route component={Error}/>
           </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
