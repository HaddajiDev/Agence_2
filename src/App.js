import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/SignUp';
import Home from './Components/Home';
import Login from './Components/Login.js';
import { useState } from 'react';


function App() {

  const [currentUser, setCurrentUser] = useState(null);  
  const handleLogin = (user) => {
    setCurrentUser(user);
  };
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
  };

  return (
    <div className="App">
      <NavBar currentUser={currentUser} onLogout={handleLogout} />
      
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />            
        </Routes>
      
    </div>
  );
}

export default App;
