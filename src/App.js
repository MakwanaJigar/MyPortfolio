import './App.css';
import Navbar from './components/Navbar';
// import Contact from './components/Contact';
// import About from './components/About';

// import { Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
    {/* <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />}/>
      <Route path='/project' element={<Project />}/>
      <Route path='/about' element={<About />}/>
    </Routes> */}
    <Footer />
    </>
  );
}

export default App;
