import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './Login/LoginPage';
import MainPage from './Main/MainPage';

import About from './pages/About';
import Jobs from './pages/Jobs'
import Home from './pages/Home';
import Profile from './pages/Profile'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  function handleLogin(flag){
    setIsLoggedIn(flag);
  }
  
  return (
    <Router>
      {isLoggedIn && <MainPage/>}
      <Routes>
        <Route path='/' element={<LoginPage handle= {handleLogin}/>}></Route>
        {isLoggedIn &&
          <>
          <Route path='/home' element={<Home handle= {handleLogin}/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/jobs' element={<Jobs/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          </>
        }
      </Routes>
    </Router>
  );
}

export default App;
