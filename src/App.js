import React from 'react';
import {Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar/Navbar';
import './App.scss';
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
          <Route exact path='/' component={Home}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/project/:id' component={Project}/>
      </header>
    </div>
  );
}

export default App;
