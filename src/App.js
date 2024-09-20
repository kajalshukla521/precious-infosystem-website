import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './global component/Header';
import Footer from './global component/Footer';
import Homepage from './pages/Homepage/Homepage';
import ContactUs from './pages/contact page/ContactUs'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Add other routes here */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
