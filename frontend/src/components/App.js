import '../css/App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from 'react';
import AuthPage from '../pages/AuthPage';
import Navbar from './Navbar';
import { getUser } from '../utilities/users-service';
import HomePage from '../pages/HomePage';
import Footer from './Footer';
import ForumPage from '../pages/ForumPage';
import EventPage from '../pages/EventPage';
import PostPage from '../pages/PostPage';
import UserContext from '../contexts/UserContext';


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
            <UserContext.Provider value={{name: user.newUser.name, email: user.newUser.email}}>
            <Navbar setUser={setUser} user={user} />
            <Routes>
              <Route path="/home" element={<HomePage/>} />
              <Route path="/events" element={<EventPage/>} />
              <Route path="/forum" element={<ForumPage/>} />
              <Route path="/post/:postId" element={<PostPage/>} />
              <Route path='/' element={<Navigate to='/home'/>}/>
            </Routes>
            
            <Footer/>
            </UserContext.Provider>
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
