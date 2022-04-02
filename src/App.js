import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import AnnualReport from './pages/Annual';
import Teams from './pages/Team';
import Blogs from './pages/Blogs';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
  
export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Home' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Events' component={Events} />
        <Route path='/Annual' component={AnnualReport} />
        <Route path='/Team' component={Teams} />
        <Route path='/Blogs' component={Blogs} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/Login' component={Login} />
      </Switch>
    </Router>
  );
}
  
