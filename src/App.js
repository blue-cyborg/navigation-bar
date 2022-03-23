import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Index';
import About from './pages/About';
import Events from './pages/Events';
import AnnualReport from './pages/Annual';
import Teams from './pages/team';
import Blogs from './pages/Blogs';
import SignUp from './pages/Signup';
  
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/Index' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Events' component={Events} />
        <Route path='/Annual' component={AnnualReport} />
        <Route path='/Team' component={Teams} />
        <Route path='/Blogs' component={Blogs} />
        <Route path='/Signup' component={SignUp} />
      </Switch>
    </Router>
  );
}
  
export default App;