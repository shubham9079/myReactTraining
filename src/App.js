import './App.css';
import React from 'react';
import Navbar from './ReactComponents/navbar'
import Home from './ReactComponents/home'
import Service from './ReactComponents/service'
import Portfolio from './ReactComponents/portfolio'

function App() {
  return(
       <div>
          <div>
            <Navbar />
          </div>
          <div id="homeID">
            <Home/>
          </div>
          <Service />
          <Portfolio />
       </div>
  )
}



export default App;
