import React from 'react';
import './App.css';

//Components
import Header from './Components/Header/Header';

//Routing stuff
import { HashRouter } from 'react-router-dom'
import routes from './routes'

function App() {
  return (
    <HashRouter>
    <div className="App">
 
            <header>
            <div className="headstyle">
              <Header /></div>
              </header>
              <div>
              {routes}
            </div>


    </div>
    </HashRouter>
  );
}

export default App;
