import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Nav from './components/Nav';
import './App.css';

function App() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="jumbotron text-center">
          <h2>Google Book Search</h2>
          <h5>Search for and Save books of interest</h5>
          </div>
          <Switch>
            <Route exact path="/" component ={Search}/>
            <Route exact path="/saved" component = {Saved}/>
            <Route path ="*" component = {Search}/>
          </Switch>
        </div>
      </Router>
    )
}

export default App;
