import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import './App.css';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import SEC from './Components/SEC';
import GenerateQR from './Components/GenerateQR';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sec" element={<SEC />} />
          <Route path="/generateqrcode" element={<GenerateQR />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;