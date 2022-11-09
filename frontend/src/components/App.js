import '../css/App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import AuthPage from '../pages/AuthPage';
import Navbar from './Navbar';
import { getUser } from '../utilities/users-service';
import HomePage from '../pages/HomePage';
import Footer from './Footer';
import ForumPage from '../pages/ForumPage';


function App() {

  const [user, setUser] = useState(getUser())

  // flag
  if(!user){
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
            <Routes>
              <Route path="/home" element={<HomePage/>} />
              <Route path="/forum" element={<ForumPage/>} />
            </Routes>
            
            <Footer/>
          </>
          :
          <>
          <Routes>
            <Route path='/login' element={<AuthPage setUser={setUser} />} />
            <Route path='/' element={<Navigate to='/login'/>}/>
          </Routes>
          </>
      }
    </div>
  );
}

export default App;
