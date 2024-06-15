import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/SignUp';
import Home from './Components/Home';
import Login from './Components/Login.js';
import { useState } from 'react';
import AllTrips from './Components/AllTrips.js';
import Trip from './Components/Trip.js';
import Footer from './Components/Footer';
import AllBlogs from './Components/AllBlogs.js';


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
            <Route path='/allTours' element={<AllTrips currentUser={currentUser}/>} />          
            <Route path='/trip/:id' element={<Trip />} />
            <Route path="/blogs" element={<AllBlogs currentUser={currentUser}/>} />
        </Routes>

        <Footer />
      
    </div>
  );
}

export default App;
