import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ImagesSection from './Components/ImagesSection';
import MiddleSection from './Components/MiddleSection';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ImagesSection />
      <MiddleSection />
    </div>
  );
}

export default App;
