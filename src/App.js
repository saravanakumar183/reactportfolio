import './App.css';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Home from './pages/Home';
import Navbar  from './components/Navbar';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Footer from './components/Footer';
import Anim from './components/Anim';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/animation" element={<Anim/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
