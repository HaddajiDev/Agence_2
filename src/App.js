import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/SignUp';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
