import React from 'react';
import Navbar from '../src/components/Navbar/Navbar'
import './App.scss';
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
          <Home/>
      </header>
    </div>
  );
}

export default App;
