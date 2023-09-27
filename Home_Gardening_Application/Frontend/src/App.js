import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ContactForm from './components/ContactForm';
import Services from './components/Services';
import FormTableComponent from './components/FormTableComponent';
import About from './components/about';
//import About from './about';

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './Header';
// import Home from './Home';
// import Login from './Login';
// import Signup from './Signup';
// import ContactForm from './ContactForm';
// import About from './About';
// import Services from './Services';
// import Footer from './Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/abouttheapp" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;