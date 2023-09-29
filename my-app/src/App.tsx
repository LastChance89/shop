import React from 'react';
import logo from './logo.svg';
import './App.css';
import Account from './components/Account';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {


  
  return (
    <div className='main'>
      <Account/>
      <div className='routerBody'> 
          <BrowserRouter>
            <AppRoutes/>
          </BrowserRouter>
        </div>
      </div>

  )
}

export default App;
