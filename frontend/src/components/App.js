import '../css/App.css';
import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react';
import AuthPage from '../pages/AuthPage';
import Navbar from './Navbar';
import { getUser } from '../utilities/users-service';
import HomePage from '../pages/HomePage';
import Footer from './Footer';

function App() {

  const [user, setUser] = useState(getUser())

  // flag
  if(user===null){
    document.body.style = 'background: url(/auth.gif);';
  }else{
    document.body.style = 'background: url(/3492868.gif);';
  }


  return (
    <div className="App">
      {
        user ?
          <>
            <Navbar setUser={setUser} user={user} />
            <HomePage/>
            <Footer/>
          </>
          :
          <>
            <AuthPage setUser={setUser} />
          </>
      }
    </div>
  );
}

export default App;
